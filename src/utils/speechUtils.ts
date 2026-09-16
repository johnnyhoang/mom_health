/**
 * Utility functions for Vietnamese Speech Synthesis & Text Cleaning
 */

export function cleanTextForSpeech(rawText: string): string {
  if (!rawText) return '';

  let text = rawText;

  // 1. Remove Markdown links [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // 2. Remove Markdown formatting (*, **, _, __, #, `, ~)
  text = text.replace(/[*_#`~>]/g, ' ');

  // 3. Clean LaTeX math notations ($Fe^{2+}$, $T-score$, etc.)
  text = text.replace(/\$Fe\^\{?2\+\}?\$|\$Fe2\+\$/gi, 'sắt hai');
  text = text.replace(/\$Fe\^\{?3\+\}?\$|\$Fe3\+\$/gi, 'sắt ba');
  text = text.replace(/\$T-score\s*:\s*-?([0-9.]+)\$/gi, 'chỉ số T-score âm $1');
  text = text.replace(/\$([0-9.]+)\s*mm\$/gi, '$1 mi-li-mét');
  text = text.replace(/\$([0-9.]+)\s*cm\$/gi, '$1 xen-ti-mét');
  text = text.replace(/\$([0-9.]+)\s*kg\$/gi, '$1 ki-lô-gam');
  text = text.replace(/\$([^$]+)\$/g, '$1');

  // 4. Expand Common Medical Abbreviations into natural Vietnamese speech
  const replacements: Array<[RegExp, string]> = [
    [/\bGPB\b/g, 'giải phẫu bệnh'],
    [/\bBV\b/g, 'bệnh viện'],
    [/\bBV\.\s*/g, 'bệnh viện '],
    [/\bĐHYD\b/g, 'đại học y dược'],
    [/\bTP\.?HCM\b/g, 'thành phố Hồ Chí Minh'],
    [/\bK vú\b/gi, 'ung thư vú'],
    [/\bK giáp\b/gi, 'ung thư tuyến giáp'],
    [/\bK nội mạc\b/gi, 'ung thư nội mạc tử cung'],
    [/\bORIF\b/g, 'phẫu thuật kết hợp xương nẹp vít'],
    [/\bACDF\b/g, 'phẫu thuật hàn xương liên thân đốt cổ'],
    [/\bCSM\b/g, 'bệnh lý tủy sống cổ'],
    [/\bDVT\b/g, 'huyết khối tĩnh mạch sâu'],
    [/\bCAM Boot\b/gi, 'giày bảo hộ cổ chân cam bút'],
    [/\bROM\b/g, 'biên độ vận động'],
    [/\bNWB\b/g, 'không tỳ đè'],
    [/\bPWB\b/g, 'tỳ đè một phần'],
    [/\bFWB\b/g, 'tỳ đè hoàn toàn'],
    [/\bSERM\b/g, 'chất điều hòa thụ thể estrogen chọn lọc'],
    [/\bPMS\b/g, 'hội chứng tiền kinh nguyệt'],
    [/\bMPS\b/g, 'hội chứng đau cân cơ'],
    [/\bMFR\b/g, 'giải phóng màng cân cơ'],
    [/\bProstaglandin F2a\b/gi, 'chất pờ-rốt-xta-gờ-lan-đin ép hai an-pha'],
    [/\bProstaglandin\b/gi, 'pờ-rốt-xta-gờ-lan-đin'],
    [/\bLMWH\b/g, 'thuốc chống đông heparin trọng lượng phân tử thấp'],
    [/\bAI\b/g, 'thuốc ức chế men aromatase'],
    [/\b(\d+)\s*mg\b/gi, '$1 mi-li-gam'],
    [/\bMRI\b/g, 'chụp cộng hưởng từ'],
    [/\bCT\b/g, 'chụp cắt lớp vi tính'],
    [/\bX-quang\b/gi, 'phim X-quang'],
    [/\bQ&A\b/gi, 'hỏi và đáp'],
    [/\bvs\b/gi, 'so với'],
    [/\b(\d+)\s*mm\b/gi, '$1 mi-li-mét'],
    [/\b(\d+)\s*cm\b/gi, '$1 xen-ti-mét'],
    [/\b(\d+)\s*kg\b/gi, '$1 ki-lô-gam'],
    [/\b(\d+)\s*%\b/gi, '$1 phần trăm'],
    [/(\d+)x(\d+)\s*mm/gi, '$1 nhân $2 mi-li-mét'],
    [/(\d+)x(\d+)\s*cm/gi, '$1 nhân $2 xen-ti-mét'],
    [/&lt;/g, 'nhỏ hơn'],
    [/&gt;/g, 'lớn hơn'],
    [/< 1%/g, 'dưới một phần trăm'],
    [/< 0\.5ml/g, 'dưới không phẩy năm mi-li-lít'],
    [/24\/08\/2026/g, '24 tháng 8 năm 2026'],
    [/09\/09\/2026/g, '9 tháng 9 năm 2026'],
    [/15\/09\/2026/g, '15 tháng 9 năm 2026'],
    [/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, 'ngày $1 tháng $2 năm $3'],
    [/(\d{1,2})\/(\d{1,2})/g, 'ngày $1 tháng $2'],
    [/17h40/gi, '17 giờ 40 phút'],
    [/22h/gi, '22 giờ đêm'],
    [/23h30/gi, '23 giờ 30 phút đêm']
  ];

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  // 5. Clean extra whitespaces, multiple dashes or bullet points
  text = text.replace(/^[•\-–*]\s+/gm, '');
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Splits text into small chunks/sentences to prevent Web Speech API
 * from cutting off long utterances.
 */
export function splitTextIntoSpeechChunks(text: string, maxChunkLength = 160): string[] {
  if (!text) return [];

  const sentences = text.match(/[^.!?\n]+[.!?\n]+/g) || [text];
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    if ((currentChunk + ' ' + trimmed).length <= maxChunkLength) {
      currentChunk = currentChunk ? currentChunk + ' ' + trimmed : trimmed;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      
      if (trimmed.length > maxChunkLength) {
        // Break sentence further by commas or semicolons
        const subParts = trimmed.split(/[,;:]+/);
        let subChunk = '';
        for (const part of subParts) {
          const subTrimmed = part.trim();
          if (!subTrimmed) continue;
          if ((subChunk + ', ' + subTrimmed).length <= maxChunkLength) {
            subChunk = subChunk ? subChunk + ', ' + subTrimmed : subTrimmed;
          } else {
            if (subChunk) chunks.push(subChunk);
            subChunk = subTrimmed;
          }
        }
        if (subChunk) chunks.push(subChunk);
        currentChunk = '';
      } else {
        currentChunk = trimmed;
      }
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

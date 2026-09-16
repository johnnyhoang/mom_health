import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { cleanTextForSpeech, splitTextIntoSpeechChunks } from '../utils/speechUtils';

interface AudioReaderContextType {
  isPlaying: boolean;
  isPaused: boolean;
  currentId: string | null;
  currentTitle: string;
  progress: number;
  rate: number;
  isSupported: boolean;
  speak: (id: string, title: string, rawText: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  setRate: (rate: number) => void;
}

const AudioReaderContext = createContext<AudioReaderContextType | undefined>(undefined);

export const AudioReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [rate, setRateState] = useState<number>(1.0);
  const [isSupported, setIsSupported] = useState<boolean>(false);

  const chunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef<number>(0);
  const rateRef = useRef<number>(1.0);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const vietnameseVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Initialize Web Speech API & load voices
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Priority for Vietnamese voices
        const viVoice = voices.find(v => 
          v.lang.toLowerCase().startsWith('vi') || 
          v.name.toLowerCase().includes('vietnam') ||
          v.name.toLowerCase().includes('tiếng việt')
        ) || voices.find(v => v.lang.toLowerCase().includes('vi')) || null;

        vietnameseVoiceRef.current = viVoice;
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const playNextChunk = useCallback(() => {
    if (!isPlayingRef.current || isPausedRef.current) return;

    if (currentChunkIndexRef.current >= chunksRef.current.length) {
      // Completed reading all chunks
      setIsPlaying(false);
      setIsPaused(false);
      isPlayingRef.current = false;
      isPausedRef.current = false;
      setProgress(100);
      return;
    }

    const chunkText = chunksRef.current[currentChunkIndexRef.current];
    const utterance = new SpeechSynthesisUtterance(chunkText);
    utterance.rate = rateRef.current;
    utterance.pitch = 1.0;
    utterance.lang = 'vi-VN';

    if (vietnameseVoiceRef.current) {
      utterance.voice = vietnameseVoiceRef.current;
    }

    utterance.onend = () => {
      currentChunkIndexRef.current += 1;
      const pct = Math.round((currentChunkIndexRef.current / chunksRef.current.length) * 100);
      setProgress(pct);

      // Play next chunk
      playNextChunk();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        currentChunkIndexRef.current += 1;
        playNextChunk();
      }
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    isPlayingRef.current = false;
    isPausedRef.current = false;
    currentChunkIndexRef.current = 0;
    chunksRef.current = [];
    setProgress(0);
  }, []);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    setIsPaused(true);
    setIsPlaying(false);
    isPausedRef.current = true;
    isPlayingRef.current = false;
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        isPlayingRef.current = true;
        isPausedRef.current = false;
        playNextChunk();
      }
    }
    setIsPaused(false);
    setIsPlaying(true);
    isPausedRef.current = false;
    isPlayingRef.current = true;
  }, [playNextChunk]);

  const setRate = useCallback((newRate: number) => {
    rateRef.current = newRate;
    setRateState(newRate);
    // If currently playing, restart from current chunk with new rate
    if (isPlayingRef.current) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      playNextChunk();
    }
  }, [playNextChunk]);

  const speak = useCallback((id: string, title: string, rawText: string) => {
    if (!isSupported) {
      alert('Trình duyệt của bạn chưa hỗ trợ tính năng đọc văn bản (Web Speech API).');
      return;
    }

    // Toggle pause/play if same ID
    if (currentId === id) {
      if (isPaused) {
        resume();
        return;
      }
      if (isPlaying) {
        pause();
        return;
      }
    }

    // Stop current speech and start new
    stop();

    const cleaned = cleanTextForSpeech(rawText);
    const chunks = splitTextIntoSpeechChunks(cleaned, 150);

    if (chunks.length === 0) return;

    chunksRef.current = chunks;
    currentChunkIndexRef.current = 0;
    setCurrentId(id);
    setCurrentTitle(title);
    setIsPlaying(true);
    setIsPaused(false);
    isPlayingRef.current = true;
    isPausedRef.current = false;
    setProgress(0);

    playNextChunk();
  }, [isSupported, currentId, isPaused, isPlaying, resume, pause, stop, playNextChunk]);

  return (
    <AudioReaderContext.Provider
      value={{
        isPlaying,
        isPaused,
        currentId,
        currentTitle,
        progress,
        rate,
        isSupported,
        speak,
        pause,
        resume,
        stop,
        setRate
      }}
    >
      {children}
    </AudioReaderContext.Provider>
  );
};

export const useAudioReader = (): AudioReaderContextType => {
  const context = useContext(AudioReaderContext);
  if (!context) {
    throw new Error('useAudioReader must be used within an AudioReaderProvider');
  }
  return context;
};

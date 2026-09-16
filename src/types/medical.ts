export interface HistologyLayer {
  name: string;
  vietnameseName: string;
  depth: string;
  cellularComposition: string[];
  vascularSupply: string;
  hormonalResponse: string;
  clinicalSignificance: string;
}

export interface MenstrualCyclePhase {
  id: string;
  name: string;
  vietnameseName: string;
  days: string;
  dominantHormone: string;
  endometrialThickness: string;
  histologicalFeatures: string[];
  ultrasoundPattern: string;
  molecularSignaling: string[];
  clinicalRelevance: string;
}

export interface PathologyDisease {
  id: string;
  name: string;
  vietnameseName: string;
  icd10: string;
  prevalence: string;
  pathophysiology: {
    summary: string;
    theoriesAndMechanisms: {
      title: string;
      description: string;
      moleculesInvolved?: string[];
    }[];
    riskFactors: string[];
    protectiveFactors: string[];
  };
  classificationSystems: {
    name: string;
    details: {
      category: string;
      criteria: string;
      malignancyRiskOrPrognosis: string;
    }[];
  }[];
  clinicalManifestations: {
    primarySymptoms: string[];
    asymptomaticRates: string;
    complications: string[];
  };
  diagnosticAlgorithms: {
    firstLine: string[];
    goldStandard: string;
    keyImagingFindings: {
      modality: string;
      findings: string[];
    }[];
    histopathologyCriteria: string[];
  };
  evidenceBasedManagement: {
    medicalTherapy: {
      drugClass: string;
      agent: string;
      mechanism: string;
      evidenceLevel: string;
      indications: string;
    }[];
    surgicalIntervention: {
      procedure: string;
      approach: string;
      indications: string;
      fertilityPreservationNotes: string;
    }[];
    fertilityConsiderations: string;
    guidelineRecommendations: {
      organization: string; // e.g., "ACOG (2023)", "ESHRE (2022)", "FIGO (2023)", "NCCN (2024)"
      keyGuideline: string;
    }[];
  };
  caseScenariosOrPearls: string[];
}

export interface DiagnosticModality {
  id: string;
  name: string;
  vietnameseName: string;
  type: 'imaging' | 'invasive' | 'histopathology' | 'biomarker';
  sensitivity: string;
  specificity: string;
  indications: string[];
  contraindications: string[];
  procedureSteps: string[];
  keyNormalFindings: string;
  keyAbnormalFindings: {
    pattern: string;
    suggestiveOf: string;
    clinicalAction: string;
  }[];
  pitfallsAndLimitations: string[];
  guidelineStandard: string;
}

export interface ClinicalTreatmentProtocol {
  category: 'medical' | 'surgical' | 'fertility_preservation' | 'adjuvant';
  title: string;
  targetConditions: string[];
  protocolDetails: {
    phase: string;
    action: string;
    dosageOrTechnique: string;
    monitoring: string;
  }[];
  successRatesAndOutcomes: string;
  sideEffectsAndRisks: string[];
  keyReferences: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'diagram' | 'ultrasound' | 'hysteroscopy' | 'histology' | 'video';
  category: string;
  description: string;
  source: string;
  mediaUrl?: string; // Direct image or video URL
  videoEmbedId?: string; // YouTube or medical video ID
  url?: string;
  thumbnailUrl?: string;
  duration?: string;
  clinicalNote?: string;
  keyAnatomicalOrClinicalPoints: string[];
  relatedDiseaseId?: string;
}

export interface DecisionNode {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    nextStepId?: string;
    recommendation?: {
      riskLevel: 'low' | 'moderate' | 'high' | 'critical';
      riskTitle: string;
      evidenceGuideline: string;
      recommendedInvestigations: string[];
      urgentActions: string[];
    };
  }[];
}

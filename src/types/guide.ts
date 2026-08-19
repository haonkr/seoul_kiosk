export interface District {
  id: string;
  name: string;
  enabled: boolean;
  statusLabel: string;
  supportedDocuments: string[];
}

export interface TargetArea {
  id: string;
  label: string;
  x: number; // 0 to 1
  y: number; // 0 to 1
  width: number; // 0 to 1
  height: number; // 0 to 1
  shape: 'rect' | 'circle';
}

export interface GuideStep {
  id: string;
  order: number;
  type: 'action' | 'decision' | 'status' | 'help' | 'completion';
  imagePath?: string;
  title: string;
  description: string;
  voiceText: string;
  cautionText?: string;
  targetAreas?: TargetArea[];
  helpActions?: string[];
  previousStepId?: string;
  nextStepId?: string;
}

export interface DocumentGuide {
  id: string;
  districtId: string;
  documentName: string;
  description: string;
  versionDescription: string;
  preparationItems: string[];
  steps: GuideStep[];
}

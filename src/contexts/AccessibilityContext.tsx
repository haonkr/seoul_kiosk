import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

type FontSize = 'normal' | 'large' | 'x-large';

interface Settings {
  fontSize: FontSize;
  highContrast: boolean;
  lastGuideId?: string;
  lastStepId?: string;
}

interface AccessibilityContextType extends Settings {
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  fontSize: 'large',
  highContrast: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const saved = localStorage.getItem('accessibility_settings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('accessibility_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }, [settings]);

  // Apply visual settings to document
  useEffect(() => {
    document.documentElement.classList.remove('font-normal', 'font-large', 'font-x-large', 'high-contrast');
    document.documentElement.classList.add(`font-${settings.fontSize}`);
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }, [settings.fontSize, settings.highContrast]);

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  

  return (
    <AccessibilityContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

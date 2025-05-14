import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define volume levels
export const volumeLevels = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

type VolumeContextType = {
  volumeLevel: number;
  volumePercentage: number;
  increaseVolume: () => void;
  decreaseVolume: () => void;
  heavyEffectsEnabled: boolean;
  toggleHeavyEffects: () => void;
};

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export const VolumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [volumeIndex, setVolumeIndex] = useState(2); // Default at 40%
  const [heavyEffectsEnabled, setHeavyEffectsEnabled] = useState(true); // Par défaut, les effets sont activés

  const increaseVolume = () => {
    setVolumeIndex(prev => prev < volumeLevels.length - 1 ? prev + 1 : prev);
  };

  const decreaseVolume = () => {
    setVolumeIndex(prev => prev > 0 ? prev - 1 : prev);
  };

  const toggleHeavyEffects = () => {
    setHeavyEffectsEnabled(prev => !prev);
  };

  const value = {
    volumeLevel: volumeIndex,
    volumePercentage: volumeLevels[volumeIndex],
    increaseVolume,
    decreaseVolume,
    heavyEffectsEnabled,
    toggleHeavyEffects
  };

  return (
    <VolumeContext.Provider value={value}>
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolume = () => {
  const context = useContext(VolumeContext);
  if (context === undefined) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }
  return context;
}; 
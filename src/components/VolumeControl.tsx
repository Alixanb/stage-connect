import { House, Zap } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useVolume } from '../contexts/VolumeContext';

export const VolumeControl: React.FC = () => {
  const { volumePercentage, increaseVolume, decreaseVolume, heavyEffectsEnabled, toggleHeavyEffects } = useVolume();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-70 p-3 rounded-md flex items-center space-x-3 z-50 shadow-lg">
      <button
        onClick={handleBack}
        className="cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-md mr-2"
        title="Back to main page"
        tabIndex={0}
      >
        <House className="size-4" />
      </button>

      <div className="h-8 w-px bg-gray-600 mr-2"></div>

      <button
        onClick={decreaseVolume}
        className="cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        tabIndex={0}
      >
        -
      </button>

      <div className="flex items-center">
        <span className="text-white text-lg font-semibold mr-3">
          {Math.round(volumePercentage * 100)}%
        </span>
        <div className="w-28 h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-white"
            style={{ width: `${volumePercentage * 100}%` }}
          />
        </div>
      </div>

      <button
        onClick={increaseVolume}
        className="cursor-pointer w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        tabIndex={0}
      >
        +
      </button>

      <div className="h-8 w-px bg-gray-600 mx-2"></div>

      <button
        onClick={toggleHeavyEffects}
        className={`cursor-pointer w-auto px-3 h-10 flex items-center justify-center ${heavyEffectsEnabled
          ? 'bg-purple-700 hover:bg-purple-600'
          : 'bg-gray-700 hover:bg-gray-600'
          } text-white rounded-md font-medium transition-colors duration-200`}
        title={heavyEffectsEnabled ? "Désactiver les effets visuels lourds" : "Activer les effets visuels lourds"}
        tabIndex={0}
      >
        <Zap className={`size-4 mr-2 ${heavyEffectsEnabled ? 'text-yellow-300' : 'text-gray-400'}`} />
        <span>Effets {heavyEffectsEnabled ? 'ON' : 'OFF'}</span>
      </button>
    </div>
  );
}; 
import React from 'react';

interface ColorPickerProps {
  selectedColor: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, setColor }) => {
  const colorOptions = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC300", "#9B59B6"
  ];

  return (
    <div>
      <label htmlFor="color" className="block text-lg font-medium">
        Color
      </label>
      <div className="mt-2 flex space-x-4">
        {colorOptions.map((colorOption) => (
          <button
            key={colorOption}
            type="button"
            onClick={() => setColor(colorOption)}
            className={`w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedColor === colorOption ? 'ring-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: colorOption }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

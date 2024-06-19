import React, { useState } from 'react';
import '../styles/textInput.scss';
import PlusIcon from '../../public/assets/icons/plus';

interface TextInputProps {
  height?: number;
  label: string;
  borderRadius?: number;
  borderColor: string;
  attachSubmit?: boolean;
  onSubmit?: () => void; // Optional onSubmit prop if attachSubmit is true
}

export default function TextInput({ height = 32, label, borderRadius = 999, borderColor, attachSubmit, onSubmit }: TextInputProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="text-input">
      <input
        type="text"
        required
        className="text-input-input"
        style={{ borderColor: `var(${borderColor})`, borderRadius: `${borderRadius}px`, height: `${height}px`, paddingRight: `${attachSubmit ? '40px' : '0'}` }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span className="text-input-label">{label}</span>
      {attachSubmit && (
        <div className="text-input-submit"  style={{ borderColor: `var(${borderColor})` }} onClick={onSubmit}>
          <PlusIcon width={12} height={12} color={`var(${borderColor})`} />
        </div>
      )}
    </div>
  );
}

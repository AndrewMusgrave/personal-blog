import React from 'react';
import './TextInput.scss';

function TextInput({
  type = 'text',
  value = '',
  onChange,
  onKeyDown,
  placeholder,
  center,
}) {
  const isCenter = center ? 'input-center ' : '';
  return (
    <input
      className={`${isCenter}search-input`}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

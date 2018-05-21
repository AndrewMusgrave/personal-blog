import React, {Fragment} from 'react';
import './TextInput.scss';

function TextInput({
  type = 'text',
  value = '',
  onChange,
  onKeyDown,
  onBlur,
  placeholder,
  center,
  error,
  message,
}) {
  const isCenter = center ? 'input-center ' : '';
  const errorMarkup =  error && (
    <span className="text-error">{error}</span>
  );

  const messageMarkup =  message && (
    <span className="text-message">{message}</span>
  );

  return (
    <Fragment>
      <input
        className={`${isCenter}search-input`}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onBlur={onBlur}
        aria-label="search"
      />
      {messageMarkup}
      {errorMarkup}
    </Fragment>
  );
};

export default TextInput;

import React, { useRef, InputHTMLAttributes, ChangeEvent, FocusEvent } from 'react';
import './Input.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Label text for the input field */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Icon to display on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Custom class name for the container */
  containerClassName?: string;
  /** Custom class name for the input */
  inputClassName?: string;
  /** Custom class name for the label */
  labelClassName?: string;
  /** Callback for value change */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  /** Callback for blur event */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  required = false,
  error,
  helperText,
  leftIcon,
  rightIcon,
  containerClassName = '',
  inputClassName = '',
  labelClassName = '',
  id,
  onChange,
  onBlur,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`input-container ${containerClassName}`} onClick={handleContainerClick}>
      {label && (
        <label 
          htmlFor={inputId} 
          className={`input-label ${required ? 'required' : ''} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className="input-field-wrapper">
        {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
        
        <input
          ref={inputRef}
          id={inputId}
          className={`input-field ${error ? 'error' : ''} ${inputClassName}`}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={!!error}
          {...rest}
        />
        
        {rightIcon && <span className="input-icon input-icon-right">{rightIcon}</span>}
      </div>
      
      {error && <div className="error-message">{error}</div>}
      {helperText && !error && <div className="helper-text">{helperText}</div>}
    </div>
  );
};

export default Input;
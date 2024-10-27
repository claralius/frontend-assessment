import React from 'react'

interface InputFieldProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isValid: boolean;
}

const InputField: React.FC<InputFieldProps> = ({type, name, placeholder, value, onChange, isValid}) => {
  return (
    <input
       type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={!isValid ? 'invalid' : ''}
    />
  )
}

export default InputField

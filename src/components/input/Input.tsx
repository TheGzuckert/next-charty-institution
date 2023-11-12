'use client';
import { useState } from 'react';
import styles from './Input.module.css';
import eyeOff from '../../../public/assets/eye-off.svg';
import eye from '../../../public/assets/eye.svg';
import Image from 'next/image';

interface InputProps {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange?: (value: string) => void;
}

export function InputText({ placeholder, type = 'text', onChange }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [text, setText] = useState('');

  const handleTogglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);

    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={passwordVisible ? 'text' : type}
        value={text}
        onChange={handleChange}
      />
      {type === 'password' && (
        <button
          className={styles.passwordEye}
          onClick={handleTogglePasswordVisibility}
        >
          {passwordVisible ? (
            <Image src={eyeOff} alt="Ocultar Senha" />
          ) : (
            <Image src={eye} alt="Mostrar Senha" />
          )}
        </button>
      )}
    </div>
  );
}
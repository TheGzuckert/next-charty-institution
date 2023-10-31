'use client';
import { useState } from 'react';
import styles from './Input.module.css';
import eyeOff from '../../../public/assets/eye-off.svg';
import eye from '../../../public/assets/eye.svg';
import Image from 'next/image';

interface inputProps {
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

export function InputText({ placeholder, type = 'text' }: inputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [text, setText] = useState('');

  const handleTogglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={passwordVisible ? 'text' : type}
        value={text}
        onChange={(e) => setText(e.target.value)}
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

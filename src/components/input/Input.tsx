'use client'
import React, { ChangeEvent, MouseEvent, useState } from 'react'
import styles from './Input.module.css'
import eyeOff from '../../../public/assets/eye-off.svg'
import eye from '../../../public/assets/eye.svg'
import Image from 'next/image'

interface InputProps {
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export function InputText({
  placeholder,
  type = 'text',
  onChange,
  value,
}: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleTogglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={passwordVisible ? 'text' : type}
        value={value}
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
  )
}

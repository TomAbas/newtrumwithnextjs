import React, { useState, useEffect } from 'react';
import styles from '../../styles/RecuitmentStyles.module.css';

const InputField = ({
  placeholder = '',
  type = 'text',
  name = '',
  onChange = null,
  error = '',
  label = '',
  required = false,
  register,
  value
}) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder + (required ? '*' : '')}
        {...register}
        required={required}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default InputField;

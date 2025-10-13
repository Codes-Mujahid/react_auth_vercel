import React from 'react';
import styled from 'styled-components';

const Input = ({ text, type = "text", name, value, onChange }) => {
  return (
    <StyledWrapper>
      <div className="form">
        <input className="input" required type={type} placeholder=" " name={name} value={value} onChange={onChange}/>
        <label className="label">{text}</label>
        <span className="input-border" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    --width-of-input: 300px;
    --border-height: 1px;
    --border-before-color: rgba(221, 221, 221, 0.39);
    --border-after-color: #fff;
    --label-color: rgba(255, 255, 255, 0.6);
    position: relative;
    width: var(--width-of-input);
  }

  .input {
    color: #fff;
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);
  }

  .input-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 0.3s;
  }

  .label {
    position: absolute;
    left: 0.5rem;
    top: 0.9rem;
    color: var(--label-color);
    font-size: 0.9rem;
    pointer-events: none;
    transition: 0.3s ease;
  }

  input:hover {
    background: ;
  }

  input:focus {
    outline: none;
  }

  /* Border animation */
  input:focus ~ .input-border {
    width: 100%;
  }

  /* Floating label effect (focus OR value present) */
  input:focus ~ .label,
  input:not(:placeholder-shown) ~ .label {
    top: -0.5rem;
    font-size: 0.75rem;
    color: #fff;
  }
`;

export default Input;

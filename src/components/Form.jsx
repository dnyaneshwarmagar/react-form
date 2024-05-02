import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted!');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
    if (confirmPassword !== value) {
      setConfirmPasswordValid(false);
    } else {
      setConfirmPasswordValid(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password);
  };

  const handleEmailFocus = () => setEmailFocused(true);
  const handlePasswordFocus = () => setPasswordFocused(true);
  const handleConfirmPasswordFocus = () => setConfirmPasswordFocused(true);

  const handleEmailBlur = () => setEmailFocused(false);
  const handlePasswordBlur = () => setPasswordFocused(false);
  const handleConfirmPasswordBlur = () => setConfirmPasswordFocused(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='form_box'>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange} 
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          style={{ 
            border: emailFocused ? '2px solid blue':(emailValid ? '2px solid green' : '2px solid red')
          }} 
        />
        {!emailValid && <p style={{ color: 'red' }}>Invalid email format</p>}
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          style={{ 
            border: passwordFocused ? '2px solid blue': (passwordValid ? '2px solid green' : '2px solid red') 
          }} 
        />
        {!passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={handleConfirmPasswordChange} 
          onFocus={handleConfirmPasswordFocus}
          onBlur={handleConfirmPasswordBlur}
          style={{ 
            border: confirmPasswordFocused ? '2px solid blue': (confirmPasswordValid ? '2px solid green' : '2px solid red')
          }} 
        />
        {!confirmPasswordValid && <p style={{ color: 'red' }}>Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default Form;

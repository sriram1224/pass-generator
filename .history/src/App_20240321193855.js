import React, { useState, useRef, useCallback } from 'react';
import './App.css';

function generatePassword(length, includeUpper, includeLower, includeNumber, includeSymbol){
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+';

  let chars = '';
  if (includeUpper) chars+= upperChars;
  if (includeLower) chars += lowerChars;
  if (includeNumber) chars += numberChars;
  if (includeSymbol) chars += symbolChars;
  let password = '';
  for(let i = 0; i < length; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function App() {
  const [password,setPassword] = useState('');
  const includeUpperref = useRef(true);
  const includeLowerref= useRef(true);
  const includeSymbolref = useRef(true);
  const includeNumberref= useRef(true);
  const lengthRef = useRef(8);

  const handlechange = (ref) => {
    ref.current = !ref.current;
    handlePassword();
  };

  const handlePassword = useCallback(() => {
    const newPass = generatePassword(
      lengthRef.current,
      includeUpperref.current,
      includeLowerref.current,
      includeNumberref.current,
      includeSymbolref.current
    );
    setPassword(newPass);
  }, []);

  return (
    <div className="App">
      <p>{password}</p>
      <input type="checkbox" checked={includeUpperref.current} onChange={() => handlechange(includeUpperref)} /> Include uppercase
      <input type="checkbox" checked={includeLowerref.current} onChange={() => handlechange(includeLowerref)} /> Include lowercase
      <input type="checkbox" checked={includeNumberref.current} onChange={() => handlechange(includeNumberref)} /> Include numbers
      <input type="checkbox" checked={includeSymbolref.current} onChange={() => handlechange(includeSymbolref)} /> Include symbols
      <button onClick={handlePassword}>Generate Password</button>
      
    </div>
  );
}

export default App;
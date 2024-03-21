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
  const [password, setPassword] = useState('');
  const includeUpperRef = useRef(true);
  const includeLowerRef = useRef(true);
  const includeSymbolRef = useRef(true);
  const includeNumberRef = useRef(true);
  const [length, setLength] = useState(8);

  const handleCheckboxChange = (ref) => {
    ref.current = !ref.current;
    handlePassword();
  };

  const handlePassword = useCallback(() => {
    const newPass = generatePassword(
      length,
      includeUpperRef.current,
      includeLowerRef.current,
      includeNumberRef.current,
      includeSymbolRef.current
    );
    setPassword(newPass);
  }, [length, includeUpperRef, includeLowerRef, includeNumberRef, includeSymbolRef]);

  return (
    <div className="container">
      <div className="password-input">
        <input type="text" value={password} placeholder='Password...' readOnly />
        <button className="copy" onClick={() => navigator.clipboard.writeText(password)}><span class="material-symbols-outlined">
content_copy
        </span>
        Copy</button>
      </div>
      <div className="length-input">
        <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} min="1" max="50" />
        <label>Password Length</label>
      </div>
      <div className="checkboxes">
        <input type="checkbox" checked={includeUpperRef.current} onChange={() => handleCheckboxChange(includeUpperRef)} />
        <label>Include Uppercase</label>
        <input type="checkbox" checked={includeLowerRef.current} onChange={() => handleCheckboxChange(includeLowerRef)} />
        <label>Include Lowercase</label>
        <input type="checkbox" checked={includeNumberRef.current} onChange={() => handleCheckboxChange(includeNumberRef)} />
        <label>Include Numbers</label>
        <input type="checkbox" checked={includeSymbolRef.current} onChange={() => handleCheckboxChange(includeSymbolRef)} />
        <label>Include Symbols</label>
      </div>
      <button onClick={handlePassword} className='generate'>Generate Password</button>
    </div>
  );
}

export default App;

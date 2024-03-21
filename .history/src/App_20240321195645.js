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
  const [length, setLength] = useState(8);

  const handlechange = (ref) => {
    ref.current = !ref.current;
    handlePassword();
  };

  const handlePassword = useCallback(() => {
    const newPass = generatePassword(
      length,
      includeUpperref.current,
      includeLowerref.current,
      includeNumberref.current,
      includeSymbolref.current
    );
    setPassword(newPass);
  }, [length, includeUpperref, includeLowerref, includeNumberref, includeSymbolref]);

  return (
    <div className="App">
      <label>
        <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} min="1" max="50" />
        
        <p>Password Length</p>

      </label>
      <label> <input type="text" value={password} placeholder='Password...' readOnly /><button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
      </label>
      <label><input type="checkbox" checked={includeUpperref.current} onChange={() => handlechange(includeUpperref)} /> Include uppercase
      <input type="checkbox" checked={includeLowerref.current} onChange={() => handlechange(includeLowerref)} /> Include lowercase
      <input type="checkbox" checked={includeNumberref.current} onChange={() => handlechange(includeNumberref)} /> Include numbers
      <input type="checkbox" checked={includeSymbolref.current} onChange={() => handlechange(includeSymbolref)} /> Include 
      </label>
      <button onClick={handlePassword}>Generate Password</button>
    </div>
  );
}

export default App;

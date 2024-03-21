import { useCallback, useRef, useState } from 'react'

import './App.css'
function generatePassword(length, includeUpper, includeLower, includeNumber, includeSymbol){
		 const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+';
  

  let chars = '';
  if (includeUpper) chars+= upperChars;;
  if (includeLower) chars += lowerChars;
  if (includeNumber) chars += numberChars;
  if (includeSymbol) chars += symbolChars;
  let password = {
    
  }
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
  },[]);
	return (
		<>
			<div className="input">
				<div class="pass-container">
				<input type='text'  placeholder='Password' value={password} readOnly/>
				<label>
					<input type ="checkbox" checked={includeUpperref} onChange={()=>handlechange(includeUpperref)}/>
					include UpperCase
				</label>
				<label>
					<input type ="checkbox" checked={includeLowerref} onChange={()=>handlechange(includeLowerref)}/>
					include LowerCase
				</label>
				<label>
					<input type ="checkbox" checked={includeSymbolref} onChange={()=>handlechange(includeSymbolref)}/>
					include Symbols
				</label>
				<label>
					<input type ="checkbox" checked={includeNumberref} onChange={()=>handlechange(includeNumberref)}/>
					include Numbers
				</label>
				<label></label>
				<label></label>
				<label></label>
				</div>
			</div>
		</>
	)
}

export default App

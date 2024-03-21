import { useRef, useState } from 'react'

import './App.css'
function generatePassword(){
		
	}
function App() {
	

	
	const [password,setPassword] = useState('');
	const includeUpperref = useRef(true);
	const includeLowerref= useRef(true);
	const includeSymbolref = useRef(true);
	const includeNumberref= useRef(true);

  const handlechange = useCallback(() => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+';
    let password = '';

  })
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

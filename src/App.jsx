import { useState } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel.jsx';
import Display from './Display.jsx';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick=(value)=>{

    if (value == 'C'){
      setInput('');
    }

    else if (value == '='){
      try{
        setInput(eval(input));
              }
      catch (error) {
                setInput('Error');
        }
        } 
        
    else {
            setInput(input + value);
        }
    };
    return(
      <div className="calculator">
        <Display value={input}/>
        <ButtonPanel onButtonClick={handleButtonClick}/>
      </div>
    );

  }


export default App

import './App.css';
import React, {useState} from 'react';
import CodeArea from './CodeArea'
import ConsoleArea from './ConsoleArea';
import Visualisation from './Visualisation';
import SelectProgram from './SelectProgram';

function App() {
  const [program, setProgram] = useState('');
  return (
    <div className="App">
     <SelectProgram passSelection={setProgram} />
     
      <header className="App-header">
      {program.length > 0 &&
              <div>
              <CodeArea/>
              </div>
      }

{program.length > 0 &&
       <Visualisation/>
    }


      
      </header>
    </div>
  );
}

export default App;

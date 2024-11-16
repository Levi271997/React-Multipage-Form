import './stylesheets/App.scss';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function App() {
  return (
    <div className="App">
        <main>
           
              <div className='form-container'>  
                <Sidebar/>
                <div className='form-pagewrap'>
              
                 <div>
                   <Step3/>
                 </div>
                 <div className='steps-buttons'>
                   <button className='btn steps-prev'>Go Back</button>
                   <button className='btn steps-next'>Next Step</button>
                 </div>
                </div>
              </div>
           
        </main>
    </div>
  );
}

export default App;


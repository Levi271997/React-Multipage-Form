import './stylesheets/App.scss';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Finishing from './components/Finishing';
import Thankyou from './components/Thankyou';
import { useState } from 'react';



function App() {

  const [step, setStep] = useState(1);


 const handleNextStepSet=()=>{
    setStep((currentStep)=> (step < 4) ? currentStep + 1 : step);
 }
 const handlePrevStepSet=()=>{
  setStep((currentStep)=> (step > 1) ? currentStep - 1 :  step);
}
  return (
    <div className="App">
        <main>
           
              <div className='form-container'>  
                <Sidebar stepNumber={step}/>
                <div className='form-pagewrap'>
              
                 <div className='forms-group'>
                { RenderForm(step)}
                 </div>
                 <div className='steps-buttons'>
                  {(step > 1 ) ?  <button onClick={handlePrevStepSet} className='btn steps-prev'>Go Back</button> : null}
                   <button onClick={handleNextStepSet} className='btn steps-next'>{(step !== 4) ? 'Next Step': 'Confirm'}</button>
                 </div>
                </div>
              </div>
           
        </main>
    </div>
  );
}

export default App;

function RenderForm(step){
  switch (step){
    case 1:
      return <Step1/>
   
    case 2:
      return <Step2/>
   
    case 3:
      return <Step3/>
   
    case 4:
      return <Finishing/>

    default:
      return null;
  }
}

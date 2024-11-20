import './stylesheets/App.scss';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Finishing from './components/Finishing';
import Thankyou from './components/Thankyou';
import { useContext, useRef, useState } from 'react';
import { useFormObjects } from './context/FormContext';


function App() {

  const {step, setStep} = useFormObjects();
 const {userInfo} = useFormObjects();

 const {inputname,inputemail,inputnumber, nameerror, emailerror, numbererror} = useFormObjects();


 const handleNextStepSet=()=>{
  const name = userInfo.name;
  const email =userInfo.email;
  const number =userInfo.number;

  if(step == 1){
    
  if(name !== '' && email !== '' && number !== ''){
    setStep((currentStep)=> (step < 4) ? currentStep + 1 : step);

  }


  if(name === ''){
    inputname.current.classList.add('errorinput');
    nameerror.current.style.display="block";
    nameerror.current.innerText="This field is required";
  }else{
    inputname.current.classList.remove('errorinput');
    nameerror.current.style.display="none";
    nameerror.current.innerText="";
  }

  if(email === ''){
    inputemail.current.classList.add('errorinput');
    emailerror.current.style.display="block";
    emailerror.current.innerText="This field is required";
  }else{
    inputemail.current.classList.remove('errorinput');
    emailerror.current.style.display="none";
    emailerror.current.innerText="";
  }


  if(number === ''){
    inputnumber.current.classList.add('errorinput');
    numbererror.current.style.display="block";
    numbererror.current.innerText="This field is required";
  }else{
    inputnumber.current.classList.remove('errorinput');
    numbererror.current.style.display="none";
    numbererror.current.innerText="";
  }
  }else{
    setStep((currentStep)=> (step < 5) ? currentStep + 1 : step);
  }
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
                 {
                  step !==5 ?
                <div className='steps-buttons'>
                  {(step > 1 ) ?  <button onClick={handlePrevStepSet} className='btn steps-prev'>Go Back</button> : null}

                  {
                    (step !== 4) ?  <button onClick={handleNextStepSet} className='btn steps-next'>Next Step</button>:  <button onClick={handleNextStepSet} className='btn steps-next'>Confirm</button>
                  }
                   </div>:null
                 }
                
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

      case 5:
        return <Thankyou/>

    default:
      return null;
  }
}

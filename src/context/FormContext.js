import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export const FormObjectProvider = ({children})=>{
    const [step, setStep] = useState(1);

    const [PersonalInfo, setPersonalInfo]= useState({
        name:null,
        email:null,
        number:null,
    });

    const [selectedPlan, setSelectedPlan]= useState({
        plan:'arcade',
        duration:'monthly'
      });
      
    <FormContext.Provider value={{
        step, 
        setStep, 
        selectedPlan,
        setSelectedPlan
        
    }}>
        {children}
    </FormContext.Provider>

}
export const useFormData = ()=> useContext(FormContext);
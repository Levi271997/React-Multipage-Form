import { createContext, useContext, useState,useRef } from "react";

const FormContext  = createContext(null);

export const FormObjectsProvider =({children}) => {

    const [step, setStep ] = useState(1);

    const [userInfo, setUserInfo] = useState({
        name:'',
        email:'',
        number:'',
      });

      const handleupdateUserInfo = (e)=>{
        const {name, value }= e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]:value,
        }))
      };

      const inputname = useRef();
      const inputemail =  useRef();
      const inputnumber = useRef();
      const nameerror =  useRef();
      const emailerror =  useRef();
      const numbererror =  useRef();


      const [selectedPlan, setSelectedPlan]= useState('arcade');
      const [selectedPlanDuration, setSelectedPlanDuration] = useState('monthly');
    
      return(
        <FormContext.Provider value={{
          inputname,
          inputemail, 
          inputnumber, 
          step, 
          setStep, 
          userInfo, 
          handleupdateUserInfo, 
          selectedPlan, 
          setSelectedPlan,
          selectedPlanDuration,
          setSelectedPlanDuration, 
          nameerror, 
          emailerror, 
          numbererror }}>
                {children}
        </FormContext.Provider>
      )
};

export const useFormObjects = ()=> useContext(FormContext);
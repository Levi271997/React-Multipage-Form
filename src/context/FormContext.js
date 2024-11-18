import { createContext, useContext, useState,useRef } from "react";
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

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


      const pricingPlans = [
        {
          icon:arcade,
          planName:'Arcade',
          planMoPrice: '$9/mo',
          planYearPrice:'$90/Yr',
          planBonus:'2 months free'
        },
        {
          icon:advanced,
          planName:'Advanced',
          planMoPrice: '$12/mo',
          planYearPrice:'$120/Yr',
          planBonus:'2 months free'
        },
        {
          icon:pro,
          planName:'Pro',
          planMoPrice: '$15/mo',
          planYearPrice:'$150/Yr',
          planBonus:'2 months free'
        },
      ]

      const [selectedPlan, setSelectedPlan]= useState('Arcade');
      const [selectedPlanDuration, setSelectedPlanDuration] = useState('Monthly');
    
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
          numbererror,
          pricingPlans }}>
                {children}
        </FormContext.Provider>
      )
};

export const useFormObjects = ()=> useContext(FormContext);
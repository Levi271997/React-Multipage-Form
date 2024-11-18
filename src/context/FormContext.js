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
          planMoPrice: 9,
          planYearPrice:90,
          planBonus:'2 months free'
        },
        {
          icon:advanced,
          planName:'Advanced',
          planMoPrice: 12,
          planYearPrice:120,
          planBonus:'2 months free'
        },
        {
          icon:pro,
          planName:'Pro',
          planMoPrice: 15,
          planYearPrice:150,
          planBonus:'2 months free'
        },
      ]

      const [addons, setaddons]= useState([
        {
          addonname: 'os',
          addontitle: 'Online Services',
          addondesc:'Access to multiplayer games',
          addonMoprice: 1,
          addonYrPrice:10,
          addonSelected:false
        },
        {
          addonname:'ls',
          addontitle: 'Larger storage',
          addondesc:'Extra 1TB of cloud save',
          addonMoprice: 2,
          addonYrPrice:20,
          addonSelected:false
        },
        {
          addonname: 'cp',
          addontitle: 'Customizable profile',
          addondesc:'Custom theme on your profile',
          addonMoprice: 2,
          addonYrPrice:20,
          addonSelected:false
        }
      ]);

    const [addonsid, setaddonsid]= useState([]);
      const [selectedPlan, setSelectedPlan]= useState('Arcade');
      const [selectedPlanDuration, setSelectedPlanDuration] = useState('Monthly');
      const [selectedPlanId, setSelectedPlanId] = useState(0);
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
          pricingPlans,
          selectedPlanId,
          setSelectedPlanId,addons ,setaddons}}>
                {children}
        </FormContext.Provider>
      )
};

export const useFormObjects = ()=> useContext(FormContext);
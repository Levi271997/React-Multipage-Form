import { useFormObjects } from "../context/FormContext";

const Finishing = ()=>{
    
    const { inputname,
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
    selectedPlanId, addons
 }= useFormObjects();

        const handleChangePlan=()=>{
            setStep(2);
        }
    
    return(
        <>
          <h2 className='form-title'>Pick add-ons</h2>
          <p className='form-instruct'>Add-ons help enhance your gaming experience.</p>

          <form>
                <ul className="list-wrapper">
                    <li className="list-item plan">
                        <div>
                            <p className="list-title">{selectedPlan}({selectedPlanDuration})</p>
                            <button onClick={handleChangePlan} className="change-btn">Change</button>
                        </div>
                        <p className="list-price">${pricingPlans[selectedPlanId]?.planMoPrice}{selectedPlanDuration === 'Monthly' ? "/mo" : '/yr'}</p>
                    </li>

{
    addons.map((addon)=>{
        if(addon.addonSelected){
            return(
                <li className="list-item">
                <p className="sublist-title">{addon.addontitle}</p>
                <p className="sublist-price">+${addon.price} {selectedPlanDuration === 'Monthly' ? `${addon.addonMoprice}/mo` : `${addon.addonYrPrice}/yr`}</p>
                </li>
            )
        }else{
            return null;
        }
       
    })
}
            
                


                </ul> 
                <div className="total">
                    <p className="sublist-title total-label">Total (per month)</p>
                    <p className="total-am">+$12/mo</p>
                </div>    
          </form>
        </>
    )
}

export default Finishing;
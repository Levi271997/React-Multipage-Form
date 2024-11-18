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
    selectedPlanId
 }= useFormObjects();

        const handleChangePlan=()=>{
            setStep(2);
            console.log(selectedPlanId);
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
                        <p className="list-price">{pricingPlans[selectedPlanId]?.planMoPrice}</p>
                    </li>
                    <li className="list-item">
                            <p className="sublist-title">Online Service</p>
                            <p className="sublist-price">+$1/mo</p>
                    </li>
                    <li className="list-item">
                            <p className="sublist-title">Larger Storage</p>
                            <p className="sublist-price">+$2/mo</p>
                    </li>
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
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { useFormObjects } from '../context/FormContext';

const Step2 = ()=>{

    // const [selectedPlan, setSelectedPlan] = useState('arcade');
    // const [planDuration, setPlanDuration] = useState('monthly');


    const {
      
        selectedPlan, 
        setSelectedPlan,
        selectedPlanDuration,
        setSelectedPlanDuration, 
        pricingPlans
      
    } = useFormObjects();

    const handleOptionChange = (event)=>{
        setSelectedPlan(event.target.value);
    }

    const handleToggle = (event)=>{
        setSelectedPlanDuration(selectedPlanDuration === 'Monthly' ? 'Yearly' : 'Monthly');
    }
    return(
        <>
          <h2 className='form-title'>Select your plan</h2>
          <p className='form-instruct'>You have the option of monthly or yearly billing.</p>

          <form>
               <div className="plan-opt">
{
    pricingPlans.map((pricing)=>{
        return(
            <div key={pricing.planName} className="opt">
                        <input type="radio" value={pricing.planName}  name="planOptions" onChange={handleOptionChange} checked={selectedPlan === pricing.planName}/>
                        <img src={pricing.icon}/>
                        <div>
                            <p className='opt-title'>{pricing.planName}</p>
                            <p className='opt-price'>{selectedPlanDuration=== 'Monthly' ? pricing.planMoPrice : pricing.planYearPrice}</p>
                            <span className={`yearly-bonus ${selectedPlanDuration=== 'Yearly' ? 'active':''}`}>{pricing.planBonus}</span>
                        </div>
                    </div>
        )
    })
}
                
                </div>   

                <div className='switch'>
                    <div className={`${selectedPlanDuration==='Monthly' ? 'active':''}`}>Monthly</div>
                    <div className='toggleBox'>
                        <input type='checkbox' onChange={handleToggle}/>                                                       
                    </div>
                    <div className={`${selectedPlanDuration ==='Yearly' ? 'active':''}`}>Yearly</div>
                    
                </div>
          </form>
        </>
    )
}

export default Step2;
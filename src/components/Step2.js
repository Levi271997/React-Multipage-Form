import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { useState } from 'react';

const Step2 = ()=>{

    const [selectedPlan, setSelectedPlan] = useState('arcade');
    const [planDuration, setPlanDuration] = useState('monthly');

    const handleOptionChange = (event)=>{
        setSelectedPlan(event.target.value);
    }

    const handleToggle = (event)=>{
        setPlanDuration(planDuration === 'monthly' ? 'yearly' : 'monthly');
    }
    return(
        <>
          <h2 className='form-title'>Select your plan</h2>
          <p className='form-instruct'>You have the option of monthly or yearly billing.</p>

          <form>
               <div className="plan-opt">
                    <div className="opt">
                        <input type="radio" value="arcade"  name="planOptions" onChange={handleOptionChange} checked={selectedPlan === 'arcade'}/>
                        <img src={arcade}/>
                        <div>
                            <p className='opt-title'>Arcade</p>
                            <p className='opt-price'>$9/mo</p>
                        </div>
                    </div>

                    <div className="opt">
                        <input type="radio" value="advanced"  name="planOptions" onChange={handleOptionChange} checked={selectedPlan === 'advanced'}/>
                        <img src={advanced}/>
                        <div>
                            <p className='opt-title'>Advanced</p>
                            <p className='opt-price'>$12/mo</p>
                        </div>
                    </div>

                    <div className="opt">
                        <input type="radio" value="pro"  name="planOptions" onChange={handleOptionChange} checked={selectedPlan === 'pro'}/>
                        <img src={pro}/>
                        <div>
                            <p className='opt-title'>Pro</p>
                            <p className='opt-price'>$15/mo</p>
                        </div>
                    </div>
                
                </div>   

                <div className='switch'>
                    <div className={`${planDuration==='monthly' ? 'active':''}`}>Monthly</div>
                    <div className='toggleBox'>
                        <input type='checkbox' onChange={handleToggle}/>                                                       
                    </div>
                    <div className={`${planDuration==='yearly' ? 'active':''}`}>Yearly</div>
                    
                </div>
          </form>
        </>
    )
}

export default Step2;
const Step3 = ()=>{
    return(
        <>
          <h2 className='form-title'>Pick add-ons</h2>
          <p className='form-instruct'>Add-ons help enhance your gaming experience.</p>

          <form>
                <div className="addons-card checkgroup">
                <input type="checkbox" name="online-service" className="check-item"/>
                    <div className="card-checkbox"> 
                        <div className="checkBox-wrap">
                           
                        </div>
                        <div>
                            <p className="card-title">Online Service</p>
                            <p className="card-info">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="card-price">+$1/mo</p>

                </div>      

                  <div className="addons-card checkgroup">
                <input type="checkbox" name="large-storage" className="check-item"/>
                    <div className="card-checkbox"> 
                        <div className="checkBox-wrap">
                           
                        </div>
                        <div>
                            <p className="card-title">Larger storage</p>
                            <p className="card-info">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p className="card-price">+$2/mo</p>

                </div>      

                <div className="addons-card checkgroup">
                <input type="checkbox" name="customizable-profile" className="check-item"/>
                    <div className="card-checkbox"> 
                        <div className="checkBox-wrap">
                           
                        </div>
                        <div>
                            <p className="card-title">Customizable profile</p>
                            <p className="card-info">Custom theme on your profile</p>
                        </div>
                    </div>
                    <p className="card-price">+$2/mo</p>

                </div>       
          </form>
        </>
    )
}

export default Step3;
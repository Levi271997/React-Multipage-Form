import { useFormObjects } from "../context/FormContext";

const Step3 = ()=>{

    const {addons, selectedPlanDuration, setaddons } = useFormObjects();

    
    const handleToggleAddonSelection = (e) => {
        const addonName = e.target.name; // Get the name of the clicked checkbox
      
        setaddons(currentAddons =>
          currentAddons.map(addon =>
            addon.addonname === addonName
              ? { ...addon, addonSelected: !addon.addonSelected }
              : addon
          )
        );
      };
      
      

    return(
        <>
          <h2 className='form-title'>Pick add-ons</h2>
          <p className='form-instruct'>Add-ons help enhance your gaming experience.</p>

          <form>

                {
                    addons.map((addon, index)=>{
                        return(
                            <div key={index} className="addons-card checkgroup">
                            <input type="checkbox" name={addon.addonname} className="check-item" onChange={handleToggleAddonSelection}/>
                                <div className="card-checkbox"> 
                                    <div className="checkBox-wrap">
                                       
                                    </div>
                                    <div>
                                        <p className="card-title">{addon.addontitle}</p>
                                        <p className="card-info">{addon.addondesc}</p>
                                    </div>
                                </div>
                                <p className="card-price">
  +${addon.price} {selectedPlanDuration === 'Monthly' ? `${addon.addonMoprice}/mo` : `${addon.addonYrPrice}/yr`}
</p>

                            </div>      
                        )
                    })
                }
              

              
          </form>
        </>
    )
}

export default Step3;
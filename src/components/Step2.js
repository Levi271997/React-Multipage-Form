const Step2 = ()=>{
    return(
        <>
          <h2 className='form-title'>Select your plan</h2>
          <p className='form-instruct'>You have the option of monthly or yearly billing.</p>

          <form>
                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Name</label>
                        <p className="error-text"></p>
                    </div>
                    <input typeof="text" name="name" placeholder="e.g. Stephen King"/>
                </div>    

                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Email address</label>
                        <p className="error-text"></p>
                    </div>
                    <input typeof="text" name="name" placeholder="e.g. stephenking@lorem.com"/>
                </div>    

                 <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Phone Number</label>
                        <p className="error-text"></p>
                    </div>
                    <input typeof="text" name="name" placeholder="e.g. +1 234 567 890"/>
                </div>            
          </form>
        </>
    )
}

export default Step2;
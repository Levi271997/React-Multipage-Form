

const Step1 = ()=>{
    return(
        <>
          <h2 className='form-title'>Personal Info</h2>
          <p className='form-instruct'>Please provide your name, email address, and phone number.</p>

          <form>
                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Name</label>
                        <p className="error-text"></p>
                    </div>
                    <input type="text" name="name" placeholder="e.g. Stephen King"/>
                </div>    

                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Email address</label>
                        <p className="error-text"></p>
                    </div>
                    <input type="text" name="name" placeholder="e.g. stephenking@lorem.com"/>
                </div>    

                 <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Phone Number</label>
                        <p className="error-text"></p>
                    </div>
                    <input type="text" name="name" placeholder="e.g. +1 234 567 890"/>
                </div>            
          </form>
        </>
    )
}

export default Step1;
import { useFormObjects } from "../context/FormContext";

const Step1 = ()=>{

    const {userInfo, handleupdateUserInfo, inputname, inputemail, inputnumber, nameerror, emailerror, numbererror} = useFormObjects();
  
    

    return(
        <>
          <h2 className='form-title'>Personal Info</h2>
          <p className='form-instruct'>Please provide your name, email address, and phone number.</p>

          <form>
                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Name</label>
                        <p ref={nameerror} className="error-text"></p>
                    </div>
                    <input ref={inputname}  type="text" name="name" value={userInfo.name} onChange={handleupdateUserInfo} placeholder="e.g. Stephen King"/>
                </div>    

                <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Email address</label>
                        <p ref={emailerror} className="error-text"></p>
                    </div>
                    <input ref={inputemail} type="email" name="email" value={userInfo.email} onChange={handleupdateUserInfo}  placeholder="e.g. stephenking@lorem.com"/>
                </div>    

                 <div className="fieldgroup">
                    <div className="input-heading">
                        <label>Phone Number</label>
                        <p ref={numbererror} className="error-text"></p>
                    </div>
                    <input ref={inputnumber} type="number" name="number"  value={userInfo.number} onChange={handleupdateUserInfo} placeholder="e.g. +1 234 567 890"/>
                </div>            
          </form>
        </>
    )
}

export default Step1;
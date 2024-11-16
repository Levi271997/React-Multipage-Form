
import iconCheckmark from '../assets/images/icon-thank-you.svg';



const Thankyou = ()=>{
    return(
      <div className='page-thankyou'>
        <img src={iconCheckmark}/>
        <p className='form-title'>Thank you!</p>
        <p className='form-instruct'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    )
}

export default Thankyou;
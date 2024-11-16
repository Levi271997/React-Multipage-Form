
 const Sidebar=(props)=>{
    return(
      <div className='side-bar'>
            <div className='sidebar-steps' data-steps="1">
              <div className={`sidebar-steps_number ${props.stepNumber === 1 ? 'active':''}`}>1</div>
              <div className='sidebar-steps_details'>
                  <p className='sidebar-steps_title'>step 1</p>
                  <p className='sidebar-steps_info'>your info</p>
              </div>
            </div>
  
            <div className='sidebar-steps' data-steps="2">
              <div className={`sidebar-steps_number ${props.stepNumber === 2 ? 'active':''}`}>2</div>
              <div className='sidebar-steps_details'>
                  <p className='sidebar-steps_title'>step 2</p>
                  <p className='sidebar-steps_info'>select plan</p>
              </div>
            </div>
  
            <div className='sidebar-steps' data-steps="3">
              <div className={`sidebar-steps_number ${props.stepNumber === 3 ? 'active':''}`}>3</div>
              <div className='sidebar-steps_details'>
                  <p className='sidebar-steps_title'>step 3</p>
                  <p className='sidebar-steps_info'>add-ons</p>
              </div>
            </div>
  
            <div className='sidebar-steps' data-steps="4">
              <div className={`sidebar-steps_number ${props.stepNumber === 4 ? 'active':''}`}>4</div>
              <div className='sidebar-steps_details'>
                  <p className='sidebar-steps_title'>step 4</p>
                  <p className='sidebar-steps_info'>summary</p>
              </div>
            </div>
      </div>
    )
  }
  
  export default Sidebar;
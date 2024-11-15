import './App.scss';

function App() {
  return (
    <div className="App">
        <main>
           
              <div className='form-container'>  
                <Sidebar/>
              </div>
           
        </main>
    </div>
  );
}

export default App;


export const Sidebar=()=>{
  return(
    <div className='side-bar'>
          <div className='sidebar-steps'>
            <div className='sidebar-steps_number active'>1</div>
            <div className='sidebar-steps_details'>
                <p className='sidebar-steps_title'>step 1</p>
                <p className='sidebar-steps_info'>your info</p>
            </div>
          </div>

          <div className='sidebar-steps'>
            <div className='sidebar-steps_number'>2</div>
            <div className='sidebar-steps_details'>
                <p className='sidebar-steps_title'>step 2</p>
                <p className='sidebar-steps_info'>select plan</p>
            </div>
          </div>

          <div className='sidebar-steps'>
            <div className='sidebar-steps_number'>3</div>
            <div className='sidebar-steps_details'>
                <p className='sidebar-steps_title'>step 3</p>
                <p className='sidebar-steps_info'>add-ons</p>
            </div>
          </div>

          <div className='sidebar-steps'>
            <div className='sidebar-steps_number'>4</div>
            <div className='sidebar-steps_details'>
                <p className='sidebar-steps_title'>step 4</p>
                <p className='sidebar-steps_info'>summary</p>
            </div>
          </div>
    </div>
  )
}

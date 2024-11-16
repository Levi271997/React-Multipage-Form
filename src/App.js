import './stylesheets/App.scss';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';

function App() {
  return (
    <div className="App">
        <main>
           
              <div className='form-container'>  
                <Sidebar/>
                <div className='form-pagewrap'>
              
                  <Step1/>
                </div>
              </div>
           
        </main>
    </div>
  );
}

export default App;


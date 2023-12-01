
import UseStateapp from "./todo/app.js";
import { RefApp } from "./todo/refapp.js";
import './app.css';
function App() {
  return (
    <>
    <div className="header">
  
          <h4>TODO APP!</h4>
    </div>
    
    <div className="main">
     
      <div>
      <UseStateapp/>
      </div>
      <div>
       

      <RefApp/>
      </div>
    

    </div>
    </>

  );
}

export default App;

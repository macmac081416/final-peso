import LoginForm from './Components/Loggedin/Loggedin';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form } from './Components/signUp/Form.jsx';


import "./App.css";
function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);


  return (


    <div className="App">
<Router>
<Switch>
<Route path="../src/Components/signUp/Form.jsx">
<Form />
</Route>
</Switch>
</Router>

{isLoggedin ? (
<>
<h1>Applicant Details</h1>

<h2>Applicant Source</h2>
<select alt="please select" className="applicant input_container">
<option value="option-1">SRA</option>
<option value="option-2">Jobs Fair</option>
<option value="option-2">Branch Walk-in</option>
</select>
<div className='divOne'>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" className='formOne'/>
  </form>
  </div>
  <form>
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" className='formOne'/>
  </form> 
  <button>Home</button>
</>
) : (

  <LoginForm setIsLoggedIn={setIsLoggedIn} />
)
    }
      </div>
          

  );
  
}

export default App;

import LoginForm from './Components/Loggedin/Loggedin';
import { useState } from 'react';


import "./App.css";
function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);


  return (
    <div className="App">


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
</>
) : (

  <LoginForm setIsLoggedIn={setIsLoggedIn} />
)
    }
      </div>
  );
}

export default App;

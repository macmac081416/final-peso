import LoginForm from './Components/Loggedin/Loggedin';
import { useState } from 'react';




import "./App.css";
function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);


  return (


    <div className="App">

{isLoggedin ? (
<Form />
) : (

  <LoginForm setIsLoggedIn={setIsLoggedIn} />
  
)


    }
      </div>
          

  );
  
}

export default App;

import React from 'react'
import './App.css';
function App() {
  return (
    <form>
    <div className='body'>
      <h1 className="h1" >Dynamic Input Form</h1>
      <div className="content">
      <label>Enter your username</label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
      <input type="text"  className="rectangle1"placeholder='username'  width="100px" required></input><br/><br/>
      <label>Enter your email</label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
      <input type="email" className="rectangle2" placeholder="email" required ></input><br/><br/>
      
      <label>Enter your password</label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
      <input type="password" className="rectangle4" placeholder='password'n="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required></input> <br/><br/>
      </div><br/><br/><br/><br/>
      <div className="space1"></div>
      <button type="submit" className='create'><div className="font">Submit</div></button>   
      <div className="space2"></div>
      </div>
      </form>
  )
}

export default App
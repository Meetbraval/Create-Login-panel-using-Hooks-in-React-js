import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  

  return (
    <div>
   
      <Header onLogout={handleLogout} />
      <main>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </main>
      
    </div>
  );
}

export default App;
























// import React from 'react'
// import Login from './components/Login'
// import './App.css';
// import Dashboard from './components/Dashboard';



// const App = () => {
//   return (
//     <div>
//     <Login/>
//    <Dashboard/>

      
//     </div>
//   )
// }

// export default App

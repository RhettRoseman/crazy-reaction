import { useState } from 'react';
import './App.css';

import Aboutme from './assets/Aboutme'; 
import Navbar from './assets/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Aboutme />
    </div>
  );
}

export default App;
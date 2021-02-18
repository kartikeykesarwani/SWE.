import React, { Fragment } from 'react';
import { BrowserRouter} from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';



import './App.css';



const App = () => 
<BrowserRouter>
    <Fragment>
      <Navbar/>
      <Landing/>
    
    </Fragment>
</BrowserRouter>
    
  
export default App;

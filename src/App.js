import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

 
function App() {
  Amplify.configure({
    Auth:{
      region:'ap-south-1',
      userPoolId:'ap-south-1_qQc9rMcVS',
      userPoolWebClientId:'1d5m0j534pn9ltcgg2p6p4o4rf',
    }
  })
  return (
    <>

    
    <Authenticator>
    {({signOut,user})=>(
       
           <Routes>
           <Route path="/" element={ <Home logout={signOut} user={user}/> } />
           <Route path="about" element={ <About/> } />
           </Routes>
    )}

    </Authenticator>
   
    </>
  );
}

export default App;

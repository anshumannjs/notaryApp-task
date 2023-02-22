import './App.css';
import { useEffect, useState } from 'react';
import UserInfo from './Components/UserInfo';
import MultiSteeper from './Components/MultiSteeper';
import Form from './Components/Form';

function App() {

  const [userData,setUserData]=useState("");

  useEffect(()=>{
    get();
  },[]);

  function get(){
    fetch(`https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse`,{
      method: 'POST',
      mode:'cors',
      cache:'no-cache',
      credentials:'same-origin',
      headers:{
        'Content-Type':'application/json'
      },
      redirect:'follow',
      referrerPolicy:'no-referrer'
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setUserData(data.response.personalInfo);
    })
  }

  return (
   <div className='flex'>
    {(userData=="")?"":
    <UserInfo userData={userData}></UserInfo>
    }
    {(userData=="")?"":
    <Form userData={userData}/>
    }
   </div>
  );
}

export default App;

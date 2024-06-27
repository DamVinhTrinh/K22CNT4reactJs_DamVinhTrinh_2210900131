
import './App.css';
import DvtListUsers from './components/DvtListUsers';
import axios from './api/dvtApi'
import { useEffect, useState } from 'react';
function DvtApp() {

const [dvtListUsers,setDvtListUsers] = useState([]);

  // đọc dữ liệu từ api
  const dvtGetAllUsers = async ()=>{
    const dvtResponse = await axios.get("dvtUsers");
    console.log("Api Data:",dvtResponse.data);
    setDvtListUsers(dvtResponse.data)
  }


useEffect(()=>{
  dvtGetAllUsers();
  console.log("state Data:",dvtListUsers);
},[])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <DvtListUsers  renderDvtListUsers={dvtListUsers}/>
    </div>
  );
}

export default DvtApp;

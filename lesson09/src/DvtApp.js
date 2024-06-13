import './App.css';
import { React, useEffect, useState, } from 'react'
import axios from "axios";
import DvtStudentList from './components/DvtStudentList';


function DvtApp() {
  // sử dụng hàm useState của hook
  const [dvtStudentList, setDvtStudentList] = useState([]);
  //Get data form api 
  const dvtGetStudent = async () => {
    try {
      const response = await axios.get("https://666a9b977013419182d0077d.mockapi.io/api/dvtv1/dvtStudent");
      setDvtStudentList(response.data);
    } catch (eror) {
      console.error("Error fetching data", error);
    }
  }
}
useEffect(() => {
  dvtGetStudent();
}, []);

return (
  <div className="container border mt-5 p-3">
    <h1 className="text-center my-3">Xử lý chữ năng CRUD - Hook - API</h1>
    <hr />
    <DvtStudentList renderDvtStudentList = {dvtStudentList}/>
  </div>
);

export default DvtApp;


import { useEffect, useState } from 'react';
import './App.css';
import DVtCategorylist from './components/DvtCategorylist';
import axios from './api/Dvtapi';
import DvtCategoryform from './components/DvtCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [dvtCategories,setDvtCategories] = useState([]);

  const getCategories = async () => {
   try {
    const dvtCateRespose = await axios.get("DvtCategory");
    setDvtCategories(dvtCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("dvtCategories: ", dvtCategories);
  }, [])
  //Trạng thái form
  const [dvtCategoryIsForm, setdvtCategoryIsFrom] = useState(false);
  const [dvtCategoryEdit, setdvtCategoryEdit] = useState("");
  const dvtHandleAddNew = (param) =>{
    setdvtCategoryIsFrom(param);
  }

  const dvtHandleCategoryCloseForm = (param) => {
    setdvtCategoryIsFrom(param);
  }
  const dvtHandleDelete =(dvtId) => {
    console.log("App-Delete-dvtId:",dvtId);
    //const dvtRespose =  axios.delete('https://666c5a5b49dbc5d7145dbb07.mockapi.io/dvtapi/dvtv1/dvtCategory/${dvtId}');
    const dvtRespose =  axios.delete('dvtCategory/${dvtId}');
    console.log("dvtRespoce - Delete",);
    let dvtDelete = dvtCategories.filter(x=>x.dvtId !== dvtId);
    setDvtCategories (dvtCategories);
    console.log("delete:",);
  }
  const DvtHandleEdit = (dvtCategory) => {
    setdvtCategoryEdit(dvtCategory)
    setdvtCategoryIsFrom(true);
  }
  return (
    <div className="container border my-3">
      <h1>Đàm Vĩnh Trinh - Call API</h1>

      <dvtCategorylist  renderdvtCategories = {dvtCategories}
                onAddNew={dvtHandleAddNew}
                ondvtDelete = {dvtHandleDelete}
                ondvtEdit= {DvtHandleEdit} />
      <hr/>
      {
        dvtCategoryIsForm ===true?<dvtCategoryform 
        renderdvtcategory= {dvtCategoryEdit}
        onCloseForm={dvtHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
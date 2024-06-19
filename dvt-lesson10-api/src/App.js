
import { useEffect, useState } from 'react';
import './App.css';
import dvtCategorylist from './components/dvtCategorylist';
import axios from './api/dvtApi';
import dvtCategoryform from './components/dvtCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [dvtCategories,setdvtCategories] = useState([]);

  const getCategories = async () => {
   try {
    const dvtCateRespose = await axios.get("dvtCategory");
    setdvtCategories(dvtCateRespose.data);
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

  const dvtHandleAddNew = (param) =>{
    setdvtCategoryIsFrom(param);
  }

  const dvtHandleCategoryCloseForm = (param) => {
    setdvtCategoryIsFrom(param);
  }

  return (
    <div className="container border my-3">
      <h1>Đàm Vĩnh Trinh - Call API</h1>

      <dvtCategorylist  renderdvtCategories = {dvtCategories}
                onAddNew={dvtHandleAddNew} />
      <hr/>
      {
        dvtCategoryIsForm ===true?<dvtCategoryform onCloseForm={dvtHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;

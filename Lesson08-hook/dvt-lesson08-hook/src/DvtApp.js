import './App.css';
import { React, useState } from 'react'
import DvtListProduct from './componerts/DvtListProduct';
import DvtProductaddOrEdit from './componerts/DvtProductaddOrEdit';

function DvtApp() {
  // mock data 
  const Dvt_Products = [
    {
      Dvt_productId: "Đàm Vĩnh Trinh"
      , Dvt_productNamce: "2210900131"
      , Dvt_quantity: 15
      , Dvt_price: 1000
    },
    {
      Dvt_productId: "P004"
      , Dvt_productName: "IPhone 12"
      , Dvt_quantity: 20
      , Dvt_price: 1250
    },
    {
      Dvt_productId: "P003"
      , Dvt_productName: "IPhone 13"
      , Dvt_quantity_quantity: 10
      , Dvt_price: 1500
    },
  ]

  // sử dụng hàm useState của hook
  const [DvtListProduct, setDvtListProduct] = useState(Dvt_Products)
  const DvtHandlesubmit = (DvtProduc) => {
    console.log("AddOrEdit:", DvtProduc);
    //  thêm vào DvtListProduct
    setDvtListProduct(DvtPrev => {
      return [
        ...DvtPrev,
        DvtProduc
      ]
    })
  }


  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chữ năng CRUD-hook</h1>
      <hr />
      <DvtListProduct renderDvtProducts={DvtListProduct} />
      <DvtProductaddOrEdit />
    </div>
  );


}

export default DvtApp;

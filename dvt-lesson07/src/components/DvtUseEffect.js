import React, { useEffect, useState } from 'react'

export default function DvtUseEffect() {
    //state:count
    const[count,setCount] = useState(0);

    //Hàm xử lí sự kiện click me
    const DvtHandleClick = ()=>{
        setCount(prev => prev +1);
    }
    //Sử dụng hàm useEffect để cập nhật lại title
    useEffect(()=>{
        document.title = 'Đàm Vĩnh Trinh'// : You clicked ${count} times;
        console.log();//'You clicked ${count} times'
    });
   // useEffect: tham số thứ 2 là mảng rỗng
   useEffect(()=>{
    console.log("Chạy lần đầu tiên - một lần");

   },[])
   //[deps]
   useEffect(()=>{
    console.log('useEffect count Clicked: {count} ')
   },[count])
  return (
    <div>
      <h2>Demo - useEffect : You clicked {count} times</h2>
      <button onClick={DvtHandleClick}>
        Click me
      </button>
    </div>
  )
}

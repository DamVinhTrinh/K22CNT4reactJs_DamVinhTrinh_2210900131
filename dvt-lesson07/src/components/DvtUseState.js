import React, { useState } from 'react'

export default function DvtUseState() {
  const[ count, setCount] = useState(10);
  // mảng
  const[list,setList]= useState([1,5]);
  //Hàm xử lí thêm ngẫu nhiên
 const DvtHandleList = ()=>{
    //Sinh ngẫu nhiên 1 giá trị số
    let num = parseInt(Math.random()*100);
    //Cập nhật lại state:list
    setList([
      ...list,
      num
    ])
    // // Cách khác
    // let lst = list.push(num);
    // setList(lst);
  }
    return (
    <div>
  <p>You Clicked {count} times</p>
  <button onClick={() => setCount(count +1)}>
    Click me 
    </button>  
    <hr/>
    <h3>List:{list.toString()}</h3>  
    <button onClick={DvtHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}

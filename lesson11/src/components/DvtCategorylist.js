import React from 'react'

export default function DvtCategorylist({renderDvtCategories, onAddNew, onDvtEdit}) {
    console.log("renderDvtCategories: ",  renderDvtCategories);

    let dvtCategoryElement = renderDvtCategories.map((DvtCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{DvtCategory.DvtId}</td>
                <td>{DvtCategory.DvtCategoryName}</td>
                <td>{DvtCategory.DvtCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>DvtHandleDelete(DvtCategory.DvtId)}>Delete</button>
                </td>
                <td>
                    <button className='btn btn-cuccess' onClick={()=>DvtHandleEdit(DvtCategory)}>Edit</button>
                </td>
            </tr>
        )
    })

    const DvtHandleAdd = () =>{
        onAddNew(true);
    }
    const DvtHandleDelete = (DvtId) =>{
        
        if(window.confirm('Bạn có thật sự muốn xóa Category có mã['+DvtId+']khong?')){
            console.log("Delete:", DvtId);
        }else{

        }
       // onDvtDelete(true);
    }
    //su kien cho nut sua
    const DvtHandleEdit = (DvtCategory) =>{
        onDvtEdit(DvtCategory);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {dvtCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={DvtHandleAdd}>Thêm mới </button>
        </div>
    )
}
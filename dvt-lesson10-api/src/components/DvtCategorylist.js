import React from 'react'

export default function dvtCategorylist({renderdvtCategories, onAddNew}) {
    console.log("renderdvtCategories: ",  renderdvtCategories);

    let dvtCategoryElement = renderdvtCategories.map((dvtCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{dvtCategory.dvtId}</td>
                <td>{dvtCategory.dvtCategoryName}</td>
                <td>{dvtCategory.dvtCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
            </tr>
        )
    })

    const dvtHandleAdd = () =>{
        onAddNew(true);
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
            <button className='btn btn-primary' onClick={dvtHandleAdd}>Thêm mới </button>
        </div>
    )
}

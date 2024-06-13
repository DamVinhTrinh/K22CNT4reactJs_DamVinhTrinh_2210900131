import React from 'react';

export default function DvtStudentList({renderDvtStudentList}) {
    console.log("Data:", renderDvtStudentList)
    let dvtElement = renderDvtStudentList.map((dvtStudent, index)=>{
        return(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{dvtStudent.dvtId}</td>
            <td>{dvtStudent.dvtName}</td>
            <td>{dvtStudent.dvtAge}</td>
            <td>{dvtStudent.dvtPhone}</td>
            <td>{dvtStudent.dvtEmail}</td>
            <td>{dvtStudent.dvtStatus}</td>
            <td>
                Edit / Delete
            </td>
        </tr>
        )
    });
    return (
        <div>
            <h2> Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {dvtElement}
                </tbody>
            </table>

        </div>
    )
}



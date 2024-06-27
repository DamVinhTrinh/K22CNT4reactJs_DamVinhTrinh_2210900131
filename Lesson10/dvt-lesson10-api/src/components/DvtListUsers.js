import React from 'react';

export default function DvtListUsers({renderDvtListUsers}) {
    console.log("DvtListUsers:",renderDvtListUsers);
    // hiển thị dữ liệu
    let dvtElementUser = renderDvtListUsers.map((dvtUser,index)=>{
        return(
            <>
              <tr>
                    <td>{dvtUser.id}</td>
                    <td>{dvtUser.UserName}</td>
                    <td>{dvtUser.Password}</td>
                    <td>{dvtUser.Email}</td>
                    <td>{dvtUser.Phone}</td>
                    <td>...</td>
             </tr>
            </>
        )
    })

    return (
        <div className='row'>
            <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <body>
                    {dvtElementUser}
                </body>
            </table>
            </div>
        </div>
            
    );
}



import React from 'react'

export default function DvtListProduct({ renderDvtProducts }) {
    console.log("List Product:", renderDvtProducts);
    let DvtTong = 0;
    let DvtElementProduct = renderDvtProducts.map((DvtProduct, index) => {
        DvtTong = +DvtProduct.Dvt_quantity * DvtProduct.Dvt_price;
        return (
            <>
                <tr key={index}>
                    <tb>{index + 1}</tb>
                    <tb>{DvtProduct.Dvt_productId}</tb>
                    <tb>{DvtProduct.Dvt_productName}</tb>
                    <tb>{DvtProduct.Dvt_quantity}</tb>
                    <tb>{DvtProduct.Dvt_quantity * DvtProduct.Dvt_price}</tb>
                    <tb>
                        <button className='btn btn-success mx-1'>
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className='btn btn-dangger mx-1'>
                            <i class="fa-solid fa-trash-list"></i>
                        </button>
                    </tb>

                </tr>
            </>
        )
    })
    return (
        <div>
            <h2> Danh sách sản Phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sản Phẩm</th>
                        <th> Tên sản Phẩm</th>
                        <th>số Lượng</th>
                        <th>Đơn Giá </th>
                        <th>Thành tiền</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {DvtElementProduct}
                </tbody>
                <floot>
                    <th colSpan={5} className='text-end'>Tổng cộng</th>
                    <th colSpan={2} className='text-start'>
                        {DvtTong}
                    </th>
                </floot>
            </table>
        </div>
    )
}

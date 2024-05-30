import React, { useState } from 'react'

export default function DvtProductaddOrEdit(DvtOnsubmit) {
    const [Dvt_productId, setDvt_ProductId] = useState('');
    const [Dvt_productNamce, setDvt_productNamce] = useState('');
    const [Dvt_quantity, setDvt_quantity] = useState('0');
    const [Dvt_price, setDvt_price] = useState('0');
    const DvtHandlesubmit = () => {
        let DvtProduct = {
            Dvt_productId: Dvt_productId,
            Dvt_productNamce: Dvt_productNamce,
            Dvt_quantity: Dvt_quantity,
            Dvt_price: Dvt_price,

        }
        DvtOnsubmit(DvtProduct)
    }
    return (
        <div className='col-md-6'>
            <h2>Thêm mới sản phẩm /sửa đổi</h2>
            <hr />
            <form>
                <div class="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                    <input type="text" className="from-control" placeholder="Mã sản phẩm"
                        name='Dvt_productId' value={Dvt_productId}
                        onChange={(ev) => setDvt_ProductId(ev.target.value)}
                        aria-describedby="basic-addon1" />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                    <input type="text" className="from-control" placeholder="Tên sản phẩm"
                        name='Dvt_productNamce' value={Dvt_productNamce}
                        onChange={(ev) => setDvt_productNamce(ev.target.value)}
                        aria-describedby="basic-addon2" />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm</span>
                    <input type="number" className="from-control" placeholder="Số lượng sản phẩm"
                        name='Dvt_quantity' value={Dvt_quantity}
                        onChange={(ev) => setDvt_quantity(ev.target.value)}
                        aria-describedby="basic-addon3" />

                </div>
                <div class="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon4">Đơn giá</span>
                    <input type="number" className="from-control" placeholder="Đơn giá"
                        name='Dvt_price' value={Dvt_price}
                        onChange={(ev) => setDvt_price(ev.target.value)}
                        aria-describedby="basic-addon4" />

                </div>
                <button className='btn btn-primary' name='DvtbtnAction'
                    onClick={DvtHandlesubmit}
                >thêm mới</button>
            </form>
        </div>
    )
}

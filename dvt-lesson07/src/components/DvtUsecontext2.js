import React, { useContext } from 'react'
import { ThemeContext } from './DvtUsecontext'

export default function DvtUseContext2() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme + 'mm-3'} >
            <h2>DvtUseContext2</h2>
            <p>
                <b>2210900131</b>
                <b>Đàm Vĩnh Trinh</b>
                <i> K22CNTT4</i>
            </p>
        </div>
    )
}

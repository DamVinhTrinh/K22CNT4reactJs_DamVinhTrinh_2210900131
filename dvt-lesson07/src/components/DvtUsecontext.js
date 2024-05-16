import React, { createContext, useContext, useState } from 'react'
import DvtUseContext1 from './DvtUsecontext1';
export const ThemeContext = createContext(); // tạo thành ngữ cảnh để chia

export default function DvtUseContext() {
    // state
    const [theme, setTheme] = useState('red');
    // Hàm thay đổi theme
    const DvtHandleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2> Demo useContext</h2>
                <DvtUseContext1 />
                <button onClick={DvtHandleChange}> Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}

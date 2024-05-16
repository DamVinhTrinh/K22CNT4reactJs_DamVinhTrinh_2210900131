import React from 'react'
import DvtUseState from './components/DvtUseState'
import DvtUseEffect from './components/DvtUseEffect'
import DvtUseContext from './components/DvtUsecontext'
import './/App.css'

export default function app() {

  return (
    <div className='container border mt-3'>
      <h1 className='text-center'> Đàm Vĩnh Trinh - hook</h1>
      <hr />
      <DvtUseState />
      <hr />
      <DvtUseEffect />
      <hr />
      <DvtUseContext />

    </div>

  )
}

import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({children,isSalesModal}) {
  return  ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className='modal'  style={{border:isSalesModal ?"4px solid" :' #fff',borderColor:'orange'}}>
        {children}
                 </div>
    </div>
  ),document.body)
}

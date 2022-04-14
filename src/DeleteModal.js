import React from 'react'

export default function DeleteModal(props) {
    const {onConfirm , onCancel } = props
  return (
    <div className='modal'> 
    <p>Are You Sure?</p>
      <button className='btn btn--alt' onClick={onCancel}>cancel</button>

    <button className='btn' onClick={onConfirm}>  Confirm  </button>

  </div>
  )
}

import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import "./styles.css"
export default function Pay(props) { 
  return (
    <div className='toast'>
      <div className='toast-content'>
        <FaCheckCircle className='check' />
        <div className='message'>
          <span className='text-1'>success</span>
          <span className='text-1'>you odered food</span>
        </div>
      </div>
      {props.buy ? (
        <div className='progress active'></div>
      ): (
        <div className='progress'></div>
      )}
    </div>
  )
}

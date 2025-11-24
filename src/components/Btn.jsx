import React from 'react'


const Btn = ({title, color,  onClick}) => {

  return (
    <> 
        <button className={`${color}`} onClick={onClick}>
            {title}
        </button>
    </>
  )
}

export default Btn
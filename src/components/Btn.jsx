import React from 'react'


const Btn = ({title, color}) => {
  return (
    <> 
        <button className={`${color}`}>
            {title}
        </button>
    </>
  )
}

export default Btn
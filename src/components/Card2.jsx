import React from 'react'
import Btn from './Btn'

const Card2 = ({color, style, title, mainTxt, pQuantity, image}) => {
  return (
    <>
        <div className={`${color}`} style={{width: style}} >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{mainTxt}</p>
                <p className="card-text">{pQuantity}</p>

                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

                {/* <Btn title='Green' color='btn btn-success' /> */}
            </div>
        </div>

        
    </>
  )
}

export default Card2
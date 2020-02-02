import React from 'react';
import './scroll.css'


const Scroll = (props) => {
    return(
        <div className='fixed-navbar'>
            {props.children}
        </div>
    )
}

export default Scroll;
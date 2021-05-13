import React from 'react';
import './Navitem.css'

const NavItem = (props)=>{
    const classNames = ['nav-Item'];
    if (props.selected){
        classNames.push('Nav-item-selected');
    }
    if(props.vertical){
        classNames.push('Nav-item-vertical');
    }
    return(
        <button
        className={classNames.join(' ')}
        type="button"
        onClick={props.onNav}
        >
            {props.title}
        </button>
    );
};

export default NavItem;
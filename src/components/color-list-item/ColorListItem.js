import React from 'react';

const styleBtnDelete = {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    right: '0'
}
const ColorListItem = ({firstColor, secondColor, onDelete}) => {
    return (
        <>
        <span>{firstColor}</span>
        <span>{secondColor}</span>
        <span 
        className='buttonDelete'
        style={styleBtnDelete}
        onClick={onDelete}>X</span>
        </>
    )
    
}

export default ColorListItem;
import React from 'react';
import {ListGroup, Col, Row} from 'reactstrap';
import ColorListItem from '../color-list-item';


const ColorList = ({posts, onDelete}) => {

    
    const elements = posts.map((item) => {
        const {firstColor, secondColor, id} = item;
        return (
            <li 
            key={id}
            className='list-group-item'
            style={{display: 'flex', justifyContent: 'space-between', background: `linear-gradient(to right bottom, ${firstColor}, ${secondColor})`, marginBottom: '5px'}}
            >
                <ColorListItem  
                {...item}
                onDelete={() => onDelete(id)}/>
            </li>    
        )
    });

    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3}}>
                <ListGroup style={{marginTop: '20px'}}>
                    {elements}
                </ListGroup>
             </Col>
        </Row>
           
    )

}

export default ColorList;
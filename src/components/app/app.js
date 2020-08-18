import React, {Component} from 'react';
import Forms from '../form';
import ColorList from '../color-list';
import {Container} from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.id = 0;
    }

    deleteItem(id) {

        console.log(id);
        console.log(this.state);

        this.setState(({data}) => {
            
            const index = data.findIndex(elem => elem.id === id)
           
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            
            const newArr = [...before, ...after];

            return {
                data: newArr
            }   
        });
    }

    addItem({firstColor, secondColor}) {
        const newItem = {
            firstColor,
            secondColor,
            id: this.id++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
               data: newArr
            }
            
        })
    }
  
    render() {
        const {data} = this.state;
        return (
            <>
            <Container>
                <Forms
                onAdd={this.addItem}/>
                <ColorList
                posts={data}
                onDelete={this.deleteItem}/>
            </Container>
            </>

        )
    }


}

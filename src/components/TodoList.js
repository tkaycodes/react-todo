import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            inputvalue: '',
            itemList: []
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeItem = this.removeItem.bind(this);

    };

    handleChange(e) {
        this.setState({
            inputvalue: e.target.value
        });
    };

    addNewItem(e) {

        if (this.state.inputvalue) {

            this.setState({
                itemList: [...this.state.itemList, this.state.inputvalue],
                inputvalue: ''
            });
        }

    };
    
    removeItem(itemId) {

    
        let filteredArray = this.state.itemList;

        for (var i=0;i<filteredArray.length; i++) {

            if (filteredArray[itemId] === filteredArray[i]) {
                filteredArray.splice(i, 1);
            }

        }

        this.setState({
            itemList: filteredArray
        });

    }


    render() {

        return (
            <div>
                <div>Todo List</div>
                <div>Enter  new item:</div>

                <input onChange={this.handleChange} value={this.state.inputvalue} />
                <button onClick={this.addNewItem}>Add</button>

                {
                    this.state.itemList.map((item, index) => {
                        return <Todo key={index} value={item} itemIndex={index} removeItem={this.removeItem} />
                    })
                }

            </div>
        );
    }

}

export default TodoList;

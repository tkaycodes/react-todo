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
    
    removeItem(item) {

        let filteredArray = this.state.itemList;
        let indexToRemove = filteredArray.indexOf(item)

        for (var i=0;i<filteredArray.length; i++) {

            if (filteredArray[indexToRemove] === filteredArray[i]) {
                filteredArray.splice(indexToRemove, 1);
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

                        let randomKey = Math.random().toFixed(5);
                        return <Todo key={ randomKey } value={item} itemIndex={ randomKey } removeItem={this.removeItem} />

                    })
                }

            </div>
        );
    }

}

export default TodoList;

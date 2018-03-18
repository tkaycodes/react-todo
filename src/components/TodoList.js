import React, {Component} from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isItemAdded: false,
            itemList: []
        }

        this.addItem = this.addItem.bind(this);

    }
    
    addItem(e) {
        // console.log('cliccked');
        let value = this.refs.inputbox.value;
        // console.log(value);
        this.state.itemList.push(value);
        if (value) {

            this.setState({
                isItemAdded: true,
                itemValue: value
            })

            this.refs.inputbox.value = ''
        }
    }

    render() {
        return (
            <div>
                <div>Todo List</div>
                {/* <Todo /> */}
                <div>Enter  new item:</div>
                <input name="input" type="text" ref="inputbox" style={{border: '1px solid black'}} />
                <button type="button" style={{border: '1px solid black'}} onClick={this.addItem}>Add</button>
                {
                    this.state.isItemAdded && 
                    this.state.itemList.map((item, index) => {
                        // <Todo />
                        return <Todo value={ item } key={ index } />
                    })
                }
            </div>
        )
    }

}

export default TodoList;

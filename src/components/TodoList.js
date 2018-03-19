import React, {Component} from 'react';
import Todo from './Todo.js';

// NEED TO DELETE ITEM ON CLICK OF CHECKBOX
// GET ITEM CLOSES TO CHECKBOX REMOVE IT FROM LISTS (PASS KEY UP TO PARENT, REMOVE FROM ARRAY)
// HANDLE BUG WHERE IF YOU CLICK ADD MULTIPLE TIMES (EMPTY INPUT), THEN FILL INPUT IN, THEN CLICK ADD, 
// ITLL RENDER A BUNCH OF EMPTY VALUED TODO ITEMS

class TodoList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            itemList: []
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }

    removeItem(itemId) {
        console.log('triggered');
        console.log(this.state.itemList[itemId]);

        // let newItem = itemId;

        let filterdArray = this.state.itemList.filter((e, i) => {

            return e !== this.state.itemList[itemId]
            
        });

        this.setState({

            itemList: filterdArray
            // isItem: true,
            // itemValue: value
            // // debugger
            // itemList: this.state.itemList.filter((item)=> {
            //     // return item !== itemId  
            //     let newItem = this.state.itemList[itemId];

            //     debugger;
            // })


        })

    }
    
    addItem(e) {
        let value = this.refs.inputbox.value;
        if (value) {
            //const { itemList } = this.state;
            const tester = this.state.itemList;
            // Create new array
            const newArr1 = [];
            // Add existing tasks to new array
            // newArr1 = tester;
            // tester.map((element, index) => {
            //     console.log("element is >>" + element)
            //     newArr1.push(element);
            // });
            tester.forEach(function(e, i) {
                newArr1.push(e);
            });
            // Add new task to new Array
            newArr1.push(value);
            // setState will have itemList: newArray
            this.setState({
                itemList: newArr1
            })

            // console.log(tester);
            // console.log(this.state.itemList);

            // this.state.itemList.push(value);
            // this.setState({
            //     // isItem: true,
            //     // itemValue: value,
            //     // itemList: [...this.state.itemList, value]
            //     itemList: this.state.itemList
            // })
            this.refs.inputbox.value = ''

        }
    }

    render() {

        console.log(this.state.itemList);
        return (
            <div>
                <div>Todo List</div>
                <div>Enter  new item:</div>
                <input name="input" type="text" ref="inputbox" style={{border: '1px solid black'}} />
                <button type="button" style={{border: '1px solid black'}} onClick={this.addItem}>Add</button>
                {
                    this.state.itemList.map((item, index) => {
                        return <Todo value={ item } key={ index } removeItem={ this.removeItem } todoIndex = {index} />
                    })
                }
            </div>
        )
    }

}

export default TodoList;

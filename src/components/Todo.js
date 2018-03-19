import React, {Component} from 'react';

class Todo extends Component {

    removeItem() {
        this.props.removeItem(this.props.todoIndex)
    }

    render() {
        return (
            <div>
                <div>{this.props.value}<input type="checkbox" onChange={ this.removeItem.bind(this) } /></div>
            </div>
        )
    }

}

export default Todo;

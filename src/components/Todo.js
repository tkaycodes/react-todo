import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
            // <div>This is the todo</div>
        )
    }
}

export default Todo;

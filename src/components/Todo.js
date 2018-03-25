// TO DO:
// WHEN REMOVING ITEM, CHECKBOX SHOULD NOT BE CHECKED 

import React, {Component} from 'react';

class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {


        this.setState({
            checked: !this.state.checked
        }, function() {
            this.props.removeItem(this.props.itemIndex)
        });

       
    }

    render() {
        return (
            <div>
                <div>{this.props.value}<input type="checkbox" onChange={ this.handleChange } checked={this.state.checked} /></div>
            </div>
        )
    }

}

export default Todo;

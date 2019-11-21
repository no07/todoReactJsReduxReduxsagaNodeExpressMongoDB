import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        TodosList: TodoList
    };
}

class TodoList extends Component {
    listTodoItem = () => {
        return this.TodoList.map((item) => {
            return(
                <li key={item.key}>{item.content}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.listTodoItem}
            </ul>
        );
    }
}

export default connect(
    mapStateToProps,
)(TodoList);
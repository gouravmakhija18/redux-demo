import { addTodo, deleteTodo } from '../actions/actionCreator';
import React from 'react';
import { connect } from 'react-redux';

export class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  resetInput() {
    this.setState({
      inputText: '',
    });
  }

  render() {
    const { todos, onAdd, onDelete } = this.props;

    return (
      <div>
        <h2>Demo2: TODO (Basic redux concept)</h2>
        <ul>
          {todos.map(({ text }, index) => (
            <li key={index}>
              {text}
              <button onClick={() => onDelete(index)}>delete</button>
            </li>
          ))}
          <li>
            <input
              type='text'
              value={this.state.inputText}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              onClick={() => {
                onAdd(this.state.inputText);
                this.resetInput();
              }}
            >
              add
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = ({ todos }) => ({ todos });
export const mapDispatchToProps = (dispatch) => ({
  onAdd(text) {
    dispatch(addTodo(text));
  },
  onDelete(index) {
    dispatch(deleteTodo(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

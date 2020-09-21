import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json());
      .then(res => {
        this.setState({
          todos: res
        });
      })
      .catch(err => console.error('fetch failed!', err))
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type: 'application/json'
      },
      body: JSON.stringify(newTodo)
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          todos: this.state.todos.concat(res)
        })
      })
      .catch(err => console.error('fetch failed!', err))
  }

  /**
   * Find the index of the matching todo in the state array.
   * Find its "isCompleted" status.
   * Make a new Object containing the opposite "isCompleted" status.
   * Use fetch to send a PATCH request to `/api/todos/${todoId}`
   * Then 😉, once the response JSON is received and parsed,
   * replace the old todo in state.
   *
   * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
   * And specify the "Content-Type" header as "application/json"
   */

  toggleCompleted(todoId) {
    const arr = this.state.todos;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === todoId) {
        if (!arr[i].isCompleted) {
          arr[i].isCompleted = true;
          fetch(`/api/todos/${todoId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(arr[i])
          })
            .then(res => res.json())
            .then(res => this.setState([{ todos: res }]))
            .catch(err => console.error('fetch failed!', err))
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

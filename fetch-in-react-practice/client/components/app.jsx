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
      .then(res => res.json())
      .then(res => {
        this.setState({ todos: res });
      })
      .catch(err => console.error('fetch failed', err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ todos: this.state.todos.concat(res) });
      })
      .catch(err => console.error('fetch failed!', err));
  }

  toggleCompleted(todoId) {
    const arr = this.state.todos;
    let todoIndex;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === todoId) {
        todoIndex = i;
        break;
      }
    }
    const targetTodo = this.state.todos[todoIndex];
    const currentIsCompleted = targetTodo.isCompleted;
    const update = {
      isCompleted: !currentIsCompleted
    };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const newTodos = this.state.todos.slice();
        newTodos[todoIndex] = updatedTodo;
        this.setState({ todos: newTodos });
      })
      .catch(err => console.error('fetch failed!', err));
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

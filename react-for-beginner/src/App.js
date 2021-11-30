import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo('');
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  return (
    <div>
      <h1>내가 해야 할 일 {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="해야 할 일을 적어주세요!" />
        <button>할거야!</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

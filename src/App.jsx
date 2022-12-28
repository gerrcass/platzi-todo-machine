import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButtom } from './components/CreateTodoButtom'

const todos = [
  { text: "Cut onions", completed: false },
  { text: "Take the React's introcourse", completed: false },
  { text: "Cry with the weeping woman", completed: false }
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButtom />
    </>
  )
}

export default App

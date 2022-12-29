import { AppUI } from './components/AppUI'
import { TodosProvider } from './context/TodosContext'

function App() {
  return (
    <TodosProvider>
      <AppUI />
    </TodosProvider>
  )
}

export default App

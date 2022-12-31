import { Card } from './components/Card'
import { TodoHeader } from './components/TodoHeader'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButtom } from './components/CreateTodoButtom'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'
import { EmptyState } from './components/EmptyState'
import { ErrorState } from './components/ErrorState'
import { LoadingState } from './components/LoadingState'
import { ChangeAlertWithStorageListener } from './components/ChangeAlert'

import { useTodos } from './hooks/useTodos'

function App() {

  const {
    loading,
    error,
    todosFiltered,
    searchInput,
    setSearchInput,
    openModal,
    count,
    completedTodos,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    synchronizeTodos
  } = useTodos()

  return (
    <Card>
      <TodoHeader loading={loading}>
        <TodoCounter
          count={count}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        todosFiltered={todosFiltered}
        count={count}
        onError={() => <ErrorState />}
        onLoading={() => <LoadingState />}
        onEmptyTodos={() => <EmptyState state='WELCOME' />}
        onNoSearchResults={() => <EmptyState searchText={searchInput} state='NO_RESULTS' />}
      /* render={(todo, index) => (
        <TodoItem
          key={todo.text}
          index={index}
          text={todo.text}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          todosFiltered={todosFiltered}
        />)
      } */
      >
        {(todo, index) => (
          <TodoItem
            key={todo.text}
            index={index}
            text={todo.text}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            todosFiltered={todosFiltered}
          />)}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener
        sincronize={synchronizeTodos}
        setOpenModal={setOpenModal}
      />
    </Card>
  )
}

export default App

import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButtom } from './CreateTodoButtom'
import { Card } from './Card'
import { useTodos } from '../hooks/useTodos'
import { Modal } from './Modal'
import { TodoForm } from './TodoForm'


const AppUI = () => {
    const { loading, error, todosFiltered, searchInput, openModal, setOpenModal } = useTodos()
    return (
        <Card>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Oops! Something went wrong...</p>}
                {loading && <p>Loading...</p>}
                {(!loading && !todosFiltered.length && searchInput === '') && <p>Create your first to do...</p>}
                {todosFiltered.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
            </TodoList>

            {!!openModal && <Modal><TodoForm /></Modal>}

            <CreateTodoButtom />
        </Card>
    )
}

export { AppUI }
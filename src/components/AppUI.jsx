import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButtom } from './CreateTodoButtom'
import { Card } from './Card'
import { useTodos } from '../hooks/useTodos'
import { Modal } from './Modal'
import { TodoForm } from './TodoForm'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { LoadingState } from './LoadingState'

const AppUI = () => {
    const { loading, error, todosFiltered, searchInput, openModal } = useTodos()

    return (
        <Card>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <ErrorState />}
                {loading && <LoadingState />}
                {!error && !loading && todosFiltered.length === 0 && searchInput === '' && <EmptyState state='WELCOME' />}
                {!error && !loading && searchInput && todosFiltered.length === 0 && <EmptyState state='NO_RESULTS' />}
                {!error && !loading && todosFiltered.map((todo, index) => (<TodoItem key={todo.text} index={index} text={todo.text} />))}
            </TodoList>
            {!!openModal && <Modal><TodoForm /></Modal>}
            <CreateTodoButtom />
        </Card>
    )
}

export { AppUI }
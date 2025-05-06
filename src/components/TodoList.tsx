import { useTodosContext } from '../lib/hooks';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 && (
        <li className="flex justify-center items-center h-full font-semibold">No todos yet</li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}>
          <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

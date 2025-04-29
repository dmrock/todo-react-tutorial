import { useState } from 'react';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Learn TypeScript', isCompleted: true },
    { text: 'Learn Tailwind CSS', isCompleted: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]">
          <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>
            {todo.text}
          </span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}

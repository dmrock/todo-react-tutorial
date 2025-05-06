import { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';
import Button from './Button';

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState('');
  const { handleAddTodo } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText('');
      }}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

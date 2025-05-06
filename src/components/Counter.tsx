import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';

export default function Counter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useContext(TodosContext);

  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}

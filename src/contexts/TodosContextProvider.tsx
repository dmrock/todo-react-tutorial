import { createContext, useEffect, useState } from 'react';
import { Todo } from '../lib/types';

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    return JSON.parse(storedTodos);
  }
  return [];
};

export default function TodosContextProvider({ children }: TodosContextProviderProps) {
  // State
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos());

  // Derived State
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  // Event Handlers
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert('Log in to add more todos');
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Side Effects
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}>
      {children}
    </TodosContext.Provider>
  );
}

import { useState } from 'react';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import TodoList from './TodoList';

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
  // State
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header
          totalNumberOfTodos={totalNumberOfTodos}
          numberOfCompletedTodos={numberOfCompletedTodos}
        />
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <Sidebar handleAddTodo={handleAddTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

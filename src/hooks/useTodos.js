import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

const TodosContext = createContext();

export const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const createTodo = useCallback(text => {
    const todo = {id: uuid(), text, completed: false};
    setTodos(prevTodos => [...prevTodos, todo]);
  }, []);

  const deleteTodo = useCallback(id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const toggleTodo = useCallback(id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  }, []);

  const total = useMemo(() => todos.length, [todos]);

  return (
    <TodosContext.Provider
      value={{createTodo, deleteTodo, todos, toggleTodo, total}}
    >
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }

  return context;
};

export default useTodos;

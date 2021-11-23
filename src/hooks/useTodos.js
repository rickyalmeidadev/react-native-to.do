import {createContext, useCallback, useContext, useState} from 'react';

const TodosContext = createContext();

export const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const createTodo = useCallback(todo => {
    setTodos(prevTodos => [...prevTodos, todo]);
  }, []);

  const deleteTodo = useCallback(id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  return (
    <TodosContext.Provider value={{todos, createTodo, deleteTodo}}>
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

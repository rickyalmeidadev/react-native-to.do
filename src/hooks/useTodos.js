import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {v4 as uuid} from 'uuid';
import storage from '@app/utils/storage';

const TodosContext = createContext();

export const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState(() => {
    try {
      const storagedTodos = JSON.parse(storage.getString('todos'));
      return Array.isArray(storagedTodos) ? storagedTodos : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    storage.set('todos', JSON.stringify(todos));
  }, [todos]);

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

  return (
    <TodosContext.Provider value={{createTodo, deleteTodo, todos, toggleTodo}}>
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

import {render, makeTodosWrapper} from '@testing-library';
import Header from './Header';

it('renders header with correct elements', () => {
  const screen = render(<Header />, {wrapper: makeTodosWrapper()});
  expect(screen.getByA11yLabel(/logo/i)).toHaveProp('source');
  expect(screen.getByText(/by @rickyalmeidadev/i)).toBeTruthy();
});

it('renders the task counter correctly when there is no tasks', () => {
  const screen = render(<Header />, {wrapper: makeTodosWrapper()});
  expect(screen.getByText(/Você têm 0 tarefas/i)).toBeTruthy();
});

it('renders the task counter correctly when there are tasks', () => {
  const todos = Array.from({length: 10});
  const screen = render(<Header />, {wrapper: makeTodosWrapper({todos})});
  expect(screen.getByText(/você têm 10 tarefas/i)).toBeTruthy();
});

it('renders the task counter correctly when there is one task', () => {
  const todos = Array.from({length: 1});
  const screen = render(<Header />, {wrapper: makeTodosWrapper({todos})});
  expect(screen.getByText(/você tem 1 tarefa/i)).toBeTruthy();
});

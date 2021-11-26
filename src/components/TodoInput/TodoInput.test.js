import {fireEvent, render} from '@testing-library';
import TodoInput from './TodoInput';

const mockedCreateTodo = jest.fn();

jest.mock('@app/hooks', () => ({
  useTodos: () => ({
    createTodo: mockedCreateTodo,
  }),
}));

it('calls the create todo method when submit with valid input', async () => {
  const input = 'any-input';
  const screen = render(<TodoInput />);
  fireEvent.changeText(
    screen.getByPlaceholderText(/adicione uma tarefa/i),
    input,
  );
  fireEvent.press(screen.getByA11yLabel(/adicionar/i));
  expect(mockedCreateTodo).toHaveBeenCalledWith(input);
  expect(await screen.findByDisplayValue('')).toBeTruthy();
});

it('does not calls the create todo method when submit with invalid input', async () => {
  const screen = render(<TodoInput />);
  fireEvent.press(screen.getByA11yLabel(/adicionar/i));
  expect(mockedCreateTodo).not.toHaveBeenCalled();
});

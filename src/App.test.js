import {render} from '@testing-library';
import App from './App';

it('renders a welcoming message', () => {
  const screen = render(<App />);
  expect(screen.getByText(/hello.*react native/i)).toBeTruthy();
});

import {render} from '@testing-library';
import tw from 'tw';
import Checkbox from './Checkbox';

const colors = {
  checked: tw`text-success`.color,
  unchecked: tw`text-dark`.color,
};

it('renders a checkbox', () => {
  const screen = render(<Checkbox checked={false} />);
  expect(screen.getByRole('checkbox')).toBeTruthy();
});

it('has correctly styles for checked and unchecked', () => {
  const screen = render(<Checkbox checked={false} />);
  expect(screen.getByRole('checkbox')).toHaveStyle({
    borderColor: colors.unchecked,
  });
  screen.rerender(<Checkbox checked={true} />);
  expect(screen.getByRole('checkbox')).toHaveStyle({
    borderColor: colors.checked,
  });
});

it('renders a check mark only when it is checked', () => {
  const screen = render(<Checkbox checked={true} />);
  expect(screen.getByTestId('icon')).toBeTruthy();
  screen.rerender(<Checkbox checked={false} />);
  expect(screen.queryByTestId('icon')).toBeNull();
});

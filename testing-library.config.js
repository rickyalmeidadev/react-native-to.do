import {TodosProvider} from '@app/hooks';

export const makeTodosWrapper = mock => props =>
  <TodosProvider {...props} {...mock} />;

export * from '@testing-library/react-native';

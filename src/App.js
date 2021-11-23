import {View} from 'react-native';
import tw, {withDeviceContext} from 'tw';
import {Header, TodoInput, TodosList} from './components';

const App = () => (
  <View style={tw`flex-1 bg-light`}>
    <Header />
    <View style={tw`px-6 -mt-7`}>
      <TodoInput />
    </View>
    <TodosList />
  </View>
);

export default withDeviceContext(App);

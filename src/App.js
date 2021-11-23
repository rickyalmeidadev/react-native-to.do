import {StatusBar, View} from 'react-native';
import tw, {withDeviceContext} from 'tw';
import {Header, TodoInput, TodosList} from '@app/components';

const App = () => (
  <View style={tw`flex-1 bg-light`}>
    <StatusBar
      backgroundColor={tw`text-primary`.color}
      barStyle="light-content"
    />
    <Header />
    <View style={tw`px-6 -mt-7`}>
      <TodoInput />
    </View>
    <TodosList />
  </View>
);

export default withDeviceContext(App);

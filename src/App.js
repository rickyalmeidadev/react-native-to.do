import {StatusBar, View} from 'react-native';
import tw, {withDeviceContext} from 'tw';
import {Header, TodoInput, TodosList} from '@app/components';
import {TodosProvider} from '@app/hooks';

const App = () => (
  <TodosProvider>
    <StatusBar
      backgroundColor={tw`text-primary`.color}
      barStyle="light-content"
    />
    <View style={tw`flex-1 bg-light`}>
      <Header />
      <View style={tw`px-6 -mt-7`}>
        <TodoInput />
      </View>
      <TodosList />
    </View>
  </TodosProvider>
);

export default withDeviceContext(App);

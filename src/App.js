import {StatusBar, StyleSheet, View} from 'react-native';
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
      <View style={tw`bg-primary px-6 z-10`}>
        <TodoInput style={styles.input} />
      </View>
      <TodosList />
    </View>
  </TodosProvider>
);

const styles = StyleSheet.create({
  input: {
    transform: [
      {
        translateY: 20,
      },
    ],
  },
});

export default withDeviceContext(App);

import {Text, View} from 'react-native';
import tw, {withDeviceContext} from 'tw';

const App = () => (
  <View style={tw`flex-1 justify-center items-center bg-light dark:bg-dark`}>
    <Text style={tw`font-bold text-xl text-dark dark:text-light`}>
      Hello, React Native
    </Text>
  </View>
);

export default withDeviceContext(App);

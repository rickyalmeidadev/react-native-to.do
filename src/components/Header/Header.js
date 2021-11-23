import {Image, SafeAreaView, Text, View} from 'react-native';
import tw from 'tw';
import {useTodos} from '@app/hooks';

const Header = () => {
  const {total} = useTodos();

  return (
    <View style={tw`bg-primary px-6 w-screen h-full max-h-1/5`}>
      <SafeAreaView>
        <View
          style={tw`flex-row justify-between items-center android:mt-10 ios:mt-8`}
        >
          <Image source={require('@app/assets/images/logo.png')} />
          <Text style={tw`text-base text-white`}>
            Você têm{' '}
            <Text style={tw`text-white font-bold`}>{total} tarefas</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

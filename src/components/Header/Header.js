import {Image, SafeAreaView, Text, View} from 'react-native';
import tw from 'tw';
import {useTodos} from '@app/hooks';

const Header = () => {
  const {todos} = useTodos();

  const total = todos.length;
  const verb = total === 1 ? 'tem' : 'têm';
  const unit = total === 1 ? 'tarefa' : 'tarefas';

  return (
    <View style={tw`bg-primary px-6 w-screen py-2`}>
      <SafeAreaView>
        <View
          style={tw`flex-row justify-between items-center android:mt-10 ios:mt-8`}
        >
          <View>
            <Image
              accessibilityLabel="to.do logo"
              source={require('@app/assets/images/logo.png')}
            />
            <Text style={[tw`text-white text-caption`]}>
              by @rickyalmeidadev
            </Text>
          </View>
          <Text style={tw`text-base text-white`}>
            Você {verb}{' '}
            <Text style={tw`text-white font-bold`}>
              {total} {unit}
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

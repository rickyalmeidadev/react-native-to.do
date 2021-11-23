import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'tw';

const TodoInput = () => (
  <View style={tw`flex-row h-14 bg-white rounded-md`}>
    <TextInput
      style={tw`flex-1 px-4 text-black text-base`}
      placeholder="Adicione uma tarefa"
      placeholderTextColor={tw`text-dark`.color}
    />
    <View style={tw`h-full w-px bg-light`} />
    <TouchableOpacity style={tw`w-14 justify-center items-center`}>
      <Icon name="chevron-right" color={tw`text-dark`.color} size={20} />
    </TouchableOpacity>
  </View>
);

export default TodoInput;

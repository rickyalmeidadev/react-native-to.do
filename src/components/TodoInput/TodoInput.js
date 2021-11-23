import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'tw';

const TodoInput = () => (
  <View style={tw`flex-row h-14 bg-white rounded-md`}>
    <TextInput
      style={tw`flex-1 px-4 text-black text-base`}
      placeholder="Adicione uma tarefa"
      placeholderTextColor={tw`text-dark`.color}
    />
    <TouchableOpacity
      style={tw`w-14 border-l border-light justify-center items-center`}
    >
      <Text style={tw`text-dark`}>></Text>
    </TouchableOpacity>
  </View>
);

export default TodoInput;

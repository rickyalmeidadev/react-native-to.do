import {useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'tw';
import {useTodos} from '@app/hooks';

const TodoInput = ({style}) => {
  const {createTodo} = useTodos();

  const [text, setText] = useState('');

  const onCreate = () => {
    if (text.trim() === '') {
      return;
    }
    createTodo(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={[tw`flex-row h-14 bg-white rounded-md`, style]}>
      <TextInput
        style={tw`flex-1 px-4 text-black text-base`}
        placeholder="Adicione uma tarefa"
        placeholderTextColor={tw`text-dark`.color}
        onChangeText={setText}
        value={text}
        returnKeyType="done"
        onSubmitEditing={onCreate}
      />
      <View style={tw`h-full w-px bg-light`} />
      <TouchableOpacity
        accessibilityLabel="Adicionar"
        style={tw`w-14 justify-center items-center`}
        onPress={onCreate}
      >
        <Icon name="chevron-right" color={tw`text-dark`.color} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

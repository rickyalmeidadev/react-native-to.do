import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'tw';
import {useTodos} from '@app/hooks';

const colors = [tw`text-gradient-from`.color, tw`text-gradient-to`.color];
const style = tw`flex-row px-6 py-4 justify-between items-center`;
const wrappers = {
  even: ({children}) => (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors}
      style={style}
    >
      {children}
    </LinearGradient>
  ),
  odd: ({children}) => <View style={[style, tw`bg-light`]}>{children}</View>,
};

const TodosList = () => {
  const {todos, toggleTodo, deleteTodo} = useTodos();

  const onDelete = id => event => {
    Alert.alert('Excluir tarefa', 'Tem certeza que quer excluir essa tarefa?', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Excluir', onPress: () => deleteTodo(id), style: 'destructive'},
    ]);
  };

  const onToggle = id => event => {
    toggleTodo(id);
  };

  return (
    <FlatList
      contentContainerStyle={tw`py-6`}
      data={todos}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={
        <Text style={tw`self-center text-dark`}>
          Nenhuma tarefa adicionada...
        </Text>
      }
      renderItem={({item, index}) => {
        const Wrapper = wrappers[index % 2 === 0 ? 'even' : 'odd'];
        return (
          <Wrapper>
            <TouchableOpacity
              style={tw`flex-1 flex-row items-center`}
              onPress={onToggle(item.id)}
            >
              <View
                style={[
                  tw`justify-center items-center w-4 h-4 rounded border border-dark`,
                  item.completed
                    ? tw`bg-success border-success`
                    : tw`border-dark`,
                ]}
              >
                {item.completed && (
                  <Icon name="check" color={tw`text-white`.color} size={14} />
                )}
              </View>
              <Text
                style={[
                  tw`ml-4 font-medium`,
                  item.completed
                    ? tw`text-success line-through`
                    : tw`text-black`,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete(item.id)}>
              <Icon name="trash-2" color={tw`text-dark`.color} size={20} />
            </TouchableOpacity>
          </Wrapper>
        );
      }}
    />
  );
};

export default TodosList;

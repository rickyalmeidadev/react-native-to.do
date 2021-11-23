import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'tw';

const todos = [
  {id: 1, text: 'Learn React Native', completed: false},
  {id: 2, text: 'Learn Flutter', completed: true},
  {id: 3, text: 'Learn SwiftUI', completed: false},
  {id: 4, text: 'Learn Kotlin', completed: false},
];
const colors = [tw`text-gradient-from`.color, tw`text-gradient-to`.color];
const style = tw`flex-row px-6 py-4 items-center`;
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

const TodosList = () => (
  <FlatList
    contentContainerStyle={tw`py-6`}
    data={todos}
    keyExtractor={item => item.id.toString()}
    renderItem={({item, index}) => {
      const Wrapper = wrappers[index % 2 === 0 ? 'even' : 'odd'];
      return (
        <Wrapper>
          <View
            style={[
              tw`w-4 h-4 rounded border border-dark`,
              item.completed ? tw`bg-success border-success` : tw`border-dark`,
            ]}
          />
          <Text
            style={[
              tw`flex-1 ml-4 font-medium`,
              item.completed ? tw`text-success line-through` : tw`text-black`,
            ]}
          >
            {item.text}
          </Text>
          <TouchableOpacity>
            <Text style={tw`text-dark`}>Excluir</Text>
          </TouchableOpacity>
        </Wrapper>
      );
    }}
  />
);

export default TodosList;

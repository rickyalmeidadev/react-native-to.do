import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'tw';

const Checkbox = ({checked, style}) => (
  <View
    accessibilityRole="checkbox"
    accessibilityState={{checked}}
    style={[
      tw`justify-center items-center w-4 h-4 rounded border border-dark`,
      checked ? tw`bg-success border-success` : tw`border-dark`,
      style,
    ]}
  >
    {checked && (
      <Icon testID="icon" name="check" color={tw`text-white`.color} size={14} />
    )}
  </View>
);

export default Checkbox;

import {useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const InputBin2Dec = () => {
  const [value, onChangeText] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    const isBinary = /^[01]+$/.test(value);

    if (value === '') {
      setError('Vui lòng nhập dữ liệu');
      return;
    } else if (!isBinary) {
      setError('Dữ liệu nhận vào chỉ nhận dạng nhị phân');
      return;
    } else {
      setError('');
    }

    onChangeText(parseInt(value, 2).toString());
  };

  return (
    <View style={styles.all}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        keyboardType="number-pad"
      />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
      <Button title="Convert" onPress={convert} />
    </View>
  );
};

export default InputBin2Dec;

const styles = StyleSheet.create({
  all: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    height: 40,
    width: Dimensions.get('window').width * 0.9,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

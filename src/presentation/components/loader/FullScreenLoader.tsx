import {ActivityIndicator, View} from 'react-native';

const FullScreenLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
export default FullScreenLoader;

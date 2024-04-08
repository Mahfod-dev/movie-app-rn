import {Image, StyleSheet, View, Text} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface CastActorProps {
  cast: Cast;
}

const CastActor = ({cast}: CastActorProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 150, borderRadius: 10}}
        source={{uri: cast.avatar}}
      />
      <View style={styles.actorInfo}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {cast.name}
        </Text>
        <Text
          style={{
            opacity: 0.7,
            fontSize: 12,
          }}>
          {cast.character}
        </Text>
      </View>
    </View>
  );
};
export default CastActor;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});

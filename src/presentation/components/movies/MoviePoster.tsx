import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import type {RootStackParams} from '../../navigation/Navigation';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
}: MoviePosterProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {movieId: movie.id.toString()});
      }}
      style={({pressed}) => ({
        opacity: pressed ? 0.9 : 1,
        width,
        height,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
      })}>
      <View
        style={{
          ...styles.imageContainer,
          marginHorizontal: 8,
          paddingBottom: 20,
        }}>
        <Image
          source={{uri: movie.poster}}
          style={{
            ...styles.image,
            width,
            height,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    shadowColor: '#f5f5f5',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});

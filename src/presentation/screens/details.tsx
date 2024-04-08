import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useMovie} from '../hooks/useMovie';
import {MovieHeader} from '../components/movie/MovieHeader';
import MovieDetails from '../components/movie/MovieDetails';
import FullScreenLoader from '../components/loader/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {movie, loading, cast} = useMovie(movieId);

  console.log(cast);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (!movie) {
    return (
      <View>
        <Text>Movie not found</Text>
      </View>
    );
  }

  if (!cast) {
    return (
      <View>
        <Text>Cast not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        padding: 10,
      }}>
      <MovieHeader movie={movie} />
      <MovieDetails movie={movie} cast={cast} />
    </ScrollView>
  );
};

export default DetailsScreen;

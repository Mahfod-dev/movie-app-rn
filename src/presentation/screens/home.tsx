import {SafeAreaView, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../components/movies/HorizontalCarousel';
import FullScreenLoader from '../components/loader/FullScreenLoader';

const HomeScreen = () => {
  const {
    movies,
    popularMovies,
    topRatingMovies,
    upcomingMovies,
    loading,
    popularNextPage,
    error,
  } = useMovies();

  const {top} = useSafeAreaInsets();

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView
      style={{
        marginTop: top + 20,
        paddingBottom: 30,
      }}>
      <PosterCarousel movies={movies} />
      <HorizontalCarousel
        movies={popularMovies}
        title="Popular"
        loadPage={popularNextPage}
      />
      <HorizontalCarousel movies={topRatingMovies} title="Top Rating" />
      <HorizontalCarousel movies={upcomingMovies} title="Upcoming" />
    </ScrollView>
  );
};
export default HomeScreen;

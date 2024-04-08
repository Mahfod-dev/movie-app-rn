import {useEffect, useRef} from 'react';
import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {MoviePoster} from './MoviePoster';

interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
  loadPage?: () => void;
}

export const HorizontalCarousel = ({
  movies,
  title,
  loadPage,
}: HorizontalCarouselProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement, contentSize} = e.nativeEvent;

    if (contentOffset.x >= contentSize.width - layoutMeasurement.width) {
      if (isLoading.current) {
        return;
      }

      isLoading.current = true;

      loadPage && loadPage();
    }
  };

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={120} />
        )}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/currency';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import CastActor from '../cast/castActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>{movie.rating} </Text>
          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{marginTop: 10, fontSize: 23, fontFamily: 'bold'}}>
          Description:
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>

        <Text style={{marginTop: 10, fontSize: 23, fontFamily: 'bold'}}>
          Release Date:
        </Text>
        <Text style={{fontSize: 16}}>{movie.releaseDate.toString()}</Text>
        <Text style={{marginTop: 10, fontSize: 23, fontFamily: 'bold'}}>
          Duration:
        </Text>
        <Text style={{fontSize: 16}}>{movie.duration}</Text>
        <Text style={{marginTop: 10, fontSize: 23, fontFamily: 'bold'}}>
          Budget:
        </Text>
        <Text style={{fontSize: 16}}>{Formatter.currency(movie.budget)}</Text>

        <View>
          <Text
            style={{
              fontSize: 23,
              fontFamily: 'bold',
            }}>
            Actors:
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => (
              <View
                style={{
                  margin: 10,
                  alignItems: 'center',
                }}>
                <CastActor cast={item} />
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};
export default MovieDetails;

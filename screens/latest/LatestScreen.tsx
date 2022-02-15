import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading'

import { MovieInfo } from '../../typings';
import { IMG_PREFIX, TOPRATED_PATH, PLACEHOLDER_IMG } from '../../config';
import { movieSearchApi } from '../../endPoints';
import commonStyles from '../../common/styles';


const LatestScreen = ({ navigation }: { navigation: any }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movieList, setMovieList] = useState<MovieInfo[]>();

  useEffect(() => {
    fetchLatestMovies(currentPage)
  }, []);

  const fetchLatestMovies = async (pageNum?: number) => {
    const apiResp = await movieSearchApi(TOPRATED_PATH, pageNum)
    if (apiResp && apiResp?.results.length > 0) {
      setMovieList(movieList ? [...movieList, ...apiResp.results] : apiResp.results);
      setCurrentPage(apiResp.page + 1)
    }
  }

  const renderImageView = (movieObj: MovieInfo) => {
    const imgUrl = `${IMG_PREFIX}${movieObj.poster_path}`
    return (
      <TouchableOpacity
        style={commonStyles.imgContainer}
        onPress={() => navigation.navigate('Details')}
      >
        <ImageBlurLoading
          thumbnailSource={{ uri: PLACEHOLDER_IMG }}
          source={{ uri: imgUrl }}
          style={commonStyles.imgSize}
        />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={movieList}
          numColumns={2}
          style={{ width: '100%' }}
          columnWrapperStyle={commonStyles.imgRow}
          keyExtractor={(item, index) => item.original_title}
          renderItem={({ item }) => renderImageView(item)}
          onEndReachedThreshold={6}
          onEndReached={info => {
            fetchLatestMovies(currentPage)
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default LatestScreen;

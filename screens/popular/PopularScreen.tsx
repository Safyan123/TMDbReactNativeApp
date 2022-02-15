import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading'

import { MovieInfo } from '../../typings';
import { movieSearchApi } from '../../endPoints';
import { IMG_PREFIX, PLACEHOLDER_IMG, POPULAR_PATH } from '../../config';
import commonStyles from '../../common/styles';


const PopularScreen = ({ navigation }: { navigation: any }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [popularList, setPopularList] = useState<MovieInfo[]>([]);

  useEffect(() => {
    fetchPopularMovie()
  }, []);

  const fetchPopularMovie = async (pageNum?: number) => {
    setIsLoading(true)
    const apiResp = await movieSearchApi(POPULAR_PATH, pageNum)
    if (apiResp && apiResp?.results.length > 0) {
      setPopularList(popularList ? [...popularList, ...apiResp.results] : apiResp.results);
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
          data={popularList}
          numColumns={2}
          style={{ width: '100%' }}
          columnWrapperStyle={commonStyles.imgRow}
          keyExtractor={(item, index) => item.original_title}
          renderItem={({ item }) => renderImageView(item)}
          onEndReachedThreshold={6}
          onEndReached={info => {
            fetchPopularMovie(currentPage)
          }}
        />
      </SafeAreaView>
    </>
  );

};

export default PopularScreen;

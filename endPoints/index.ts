import { API_KEY, BASE_URL, LANGUAGE_PATH, PAGE_PATH, POPULAR_PATH } from "../config";
import { MovieResult } from "../typings";


export const movieSearchApi = async (apiPath: string, pageNum: number = 1): Promise<MovieResult | undefined> => {

  const url = `${BASE_URL}${apiPath}${API_KEY}${LANGUAGE_PATH}${PAGE_PATH}${pageNum}`
  console.log('\n\n\n\n\nurl: ', url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseJson = await response.json()
    if (responseJson.results && responseJson.results.length > 0) {
      return responseJson
    }
    return undefined;
  } catch (error) {
    //console.log('error: ', error.json());
    return undefined;
  }
}
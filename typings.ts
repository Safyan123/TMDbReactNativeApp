
export interface MovieResult {
  page: number,
  results: MovieInfo[],
  total_pages: number,
  total_results: number,
}

export interface MovieInfo {
  adult: boolean,
  backdrop_path: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
}



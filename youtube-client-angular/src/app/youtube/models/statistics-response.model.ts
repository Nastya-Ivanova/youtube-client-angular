export interface IStatisticsResponse {
  kind: string;
  etag: string;
  items: IStatisticsResponseItems[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface IStatisticsResponseItems {
  kind: string;
  etag: string;
  id: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  }
}

export interface ISearchResult {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  statistic: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

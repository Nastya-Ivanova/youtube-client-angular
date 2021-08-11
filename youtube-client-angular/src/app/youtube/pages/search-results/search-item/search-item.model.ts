interface ISearchItemSnippetThumbnails{
  url:string,
  width:number,
  height:number
}

interface ISearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails:{
    default:ISearchItemSnippetThumbnails,
    medium:ISearchItemSnippetThumbnails,
    high:ISearchItemSnippetThumbnails,
    standard:ISearchItemSnippetThumbnails,
    maxres:ISearchItemSnippetThumbnails
  },
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}

interface ISearchItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISearchItemSnippet,
  statistics: ISearchItemStatistics
}

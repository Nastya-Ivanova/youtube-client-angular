export interface IVideosResponse {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo?: {
    totalResults?: number;
    resultsPerPage?: number;
  };
  items: IVideosResponseItems[];
}

export interface IVideosResponseItems {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: IVideosResponseItemsSnippet;
}

interface IVideosResponseItemsSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IVideosResponseItemsSnippetThumbnails;
    medium: IVideosResponseItemsSnippetThumbnails;
    high: IVideosResponseItemsSnippetThumbnails;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IVideosResponseItemsSnippetThumbnails {
  url: string;
  width: number;
  height: number;
}

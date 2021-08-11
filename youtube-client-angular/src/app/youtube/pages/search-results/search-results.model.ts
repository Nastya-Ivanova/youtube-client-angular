import {ISearchItem} from "./search-item/search-item.model";

export interface ISearchResult {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: ISearchItem[]
}

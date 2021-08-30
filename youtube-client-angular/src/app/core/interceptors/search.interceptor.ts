import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import {YOUTUBE_API_KEY} from "../../../environments/environment";

@Injectable()
export class SearchInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = new HttpParams().set('key', YOUTUBE_API_KEY);
    const cloneReq = request.clone({ params });
    return next.handle(cloneReq);
  }
}

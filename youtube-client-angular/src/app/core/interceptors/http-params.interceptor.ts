import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloneReq = request.clone({
      params: request.params.set(
        "key",
        "AIzaSyBss-C0YUbYMYaiYn89gxgHrNYSoTX3rAM",
        // "type",
        // "video",
        // "part",
        // "snippet",
        // "maxResults",
        // 15,
        // "q",
        // "js"
      );
    });
    return next.handle(request);
  }
}



//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBss-C0YUbYMYaiYn89gxgHrNYSoTX3rAM&type=video&part=snippet&maxResults=15&q=js

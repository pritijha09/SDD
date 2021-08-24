import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpHeaderInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         // 'Authorization': environment.authorization,
          'UserID': '1'
        })
      });
    return next.handle(request);
  }

}

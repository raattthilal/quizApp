

import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class Apiinterceptor implements HttpInterceptor {
  

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

       //const baseUrl = "http://172.104.61.150:7050";
        const baseUrl = "http://localhost:5000";
        const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
        return next.handle(apiReq);
    }
    }

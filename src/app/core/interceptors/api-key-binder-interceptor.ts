import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiKeyBinderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newParams: HttpParams = req.params;

        newParams = newParams.append(
            environment.apiParams.key,
            environment.apiParams.value
        );
        newParams = newParams.append(
            'units',
            'metric'
        )

        const newReq: HttpRequest<any> = req.clone({params: newParams});
        
        return next.handle(newReq);
    }
}

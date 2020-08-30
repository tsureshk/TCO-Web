import { Injectable } from '@angular/core';
import { Http, ResponseContentType, RequestOptions } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class FileService {
    public url = 'temp.txt';

    constructor(private http: Http) {
        // nothing to do
    }

    download() {
        const options = new RequestOptions({
            responseType: ResponseContentType.Blob
        });

        return this.http.get(this.url, options);
    }
}

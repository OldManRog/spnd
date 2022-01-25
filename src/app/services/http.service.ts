import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment.prod';
import { forkJoin, Observable } from 'rxjs';
import { GetSingleUserRequest, GetSingleUserResponse, User} from 'src/app/models/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
id!: number

  constructor(private http: HttpClient) {}

  getSinglerUserById(
    request: GetSingleUserRequest
  ): Observable<GetSingleUserResponse> {

     

    return this.http.post<GetSingleUserResponse>(
      `${env.BASE_URL}get/user`,
    4
    );
  }
}

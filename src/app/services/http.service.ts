import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment.prod';
import { forkJoin, Observable } from 'rxjs';
import { AddValueRequest, AddValueResponse, GetAllValuesByUserIdRequest, GetAllValuesByUserIdResponse, GetSingleUserRequest, GetSingleUserResponse, User} from 'src/app/models/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  id!: number;

  constructor(private http: HttpClient) {}

  getSinglerUserById(
    request: GetSingleUserRequest
  ): Observable<GetSingleUserResponse> {
    return this.http.post<GetSingleUserResponse>(`${env.BASE_URL}get/user`, 1);
  }

  getAllValuesByUserId(
    request: GetAllValuesByUserIdRequest
  ): Observable<GetAllValuesByUserIdResponse> {
    return this.http.post<GetAllValuesByUserIdResponse>(
      `${env.BASE_URL}get/users/value`,
      1
    );
  }

  addValueToUser(
    request: AddValueRequest
  ): Observable<AddValueResponse> {
    return this.http.post<AddValueResponse>(
      `${env.BASE_URL}add/user/value`,
      request
    );
  }
}




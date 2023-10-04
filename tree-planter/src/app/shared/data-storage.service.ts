import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  getTotalUserCount(): Observable<any> {
    return this.http.get<any>(`${environment.IP_ADDRESS}/api/users/count`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${environment.IP_ADDRESS}/auth/register`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(`${environment.IP_ADDRESS}/auth/login`, user);
  }
}

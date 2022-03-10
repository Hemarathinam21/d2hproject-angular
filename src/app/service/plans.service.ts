import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {plan} from '../plan'
import { environment } from 'src/environments/environment';
@Injectable({providedIn: 'root'})
export class PlansService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getRecharge(): Observable<plan[]> {
    return this.http.get<plan[]>(`${this.apiServerUrl}/user/getRecharge`);
  }

  public addRecharge(data: plan): Observable<plan> {
    return this.http.post<plan>(`${this.apiServerUrl}/user/addRecharge`,data);
  }

  update(data:plan)
  {
    return this.http.put(`${this.apiServerUrl}/user/update`,data);
  }
  deleteByid(rechargeId:number)
  {
      return this.http.delete(`${this.apiServerUrl}/user/delete/${rechargeId}`);
  }
  

}

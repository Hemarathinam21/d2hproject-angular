import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { review } from '../review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public addReview(data:review): Observable<review> {
    return this.http.post<review>(`${this.apiServerUrl}/user/addReview`,data);
  }

  public getReview(): Observable<review[]> {
    return this.http.get<review[]>(`${this.apiServerUrl}/user/getReview`);
  }

  updateReview(data:review)
  {
    return this.http.put(`${this.apiServerUrl}/user/updateReview`,data);
  }
  deleteByid(review_id:number)
  {
      return this.http.delete(`${this.apiServerUrl}/user/deleteReview/${review_id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AdverseReactions } from './adverse-reactions.model';

@Injectable({
  providedIn: 'root'
})
export class AdverseReactionsService {

  private baseUrl= 'http://localhost:8081/v1/adverse-reactions';

  constructor(private http: HttpClient) { }

  getAdverseReactions(id: number) : Observable<AdverseReactions>{
    return this.http.get<AdverseReactions>(`${this.baseUrl}/${id}`);
  }

  createAdverseReactions(adverseReaction: Object) : Observable<AdverseReactions>{
    return this.http.post<AdverseReactions>(`${this.baseUrl}`,adverseReaction);
  }

  updateAdverseReactions(id: number, value: any) : Observable<AdverseReactions>{
    return this.http.put<AdverseReactions>(`${this.baseUrl}/${id}`, value);
  }

  deleteAdverseReactions(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getAdverseReactionsList(): Observable<AdverseReactions[]>{
    return this.http.get<AdverseReactions[]>(`${this.baseUrl}`);
  }
}

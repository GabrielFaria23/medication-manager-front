import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private baseUrl= 'http://localhost:8081/v1/medication';

  constructor(private http: HttpClient) { }

  getMedication(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedication(medication: Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl}`,medication);
  }

  updateMedication(id: number, value: any) : Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMedication(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getMedicationList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}

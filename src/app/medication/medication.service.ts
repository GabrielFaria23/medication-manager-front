import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medication } from './medication.model';

@Injectable()
export class MedicationService {

  private baseUrl= 'http://localhost:8081/v1/medication';

  constructor(private http: HttpClient) { }

  getMedication(id: number) : Observable<Medication>{
    return this.http.get<Medication>(`${this.baseUrl}/${id}`);
  }

  createMedication(medication: Medication) : Observable<Medication>{
    return this.http.post<Medication>(`${this.baseUrl}`,medication);
  }

  updateMedication(id: number, value: any) : Observable<Medication>{
    return this.http.put<Medication>(`${this.baseUrl}/${id}`, value);
  }

  deleteMedication(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getMedicationList(): Observable<Medication[]>{
    return this.http.get<Medication[]>(`${this.baseUrl}`);
  }

  checkAnvisaRegistrationNumber(anvisaRegistrationNumber: string): Observable<Boolean>{
    return this.http.get<Boolean>(`${this.baseUrl}/check-anvisa-registration-number?anvisaRegistrationNumber=${anvisaRegistrationNumber}`);
  }

  getMedicationListByNameOrAnvisaNumber(filter: string): Observable<Medication[]>{
    return this.http.get<Medication[]>(`${this.baseUrl}/filter?filter=${filter}`);
  }
}

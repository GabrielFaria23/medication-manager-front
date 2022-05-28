import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Manufacturer } from './manufacturer/manufacturer.model';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  private baseUrl= 'http://localhost:8081/v1/manufacturer';

  constructor(private http: HttpClient) { }

  getManufacturer(id: number) : Observable<Manufacturer>{
    return this.http.get<Manufacturer>(`${this.baseUrl}/${id}`);
  }

  createManufacturer(manufacturer: Object) : Observable<Manufacturer>{
    return this.http.post<Manufacturer>(`${this.baseUrl}`,manufacturer);
  }

  updateManufacturer(id: number, value: any) : Observable<Manufacturer>{
    return this.http.put<Manufacturer>(`${this.baseUrl}/${id}`, value);
  }

  deleteManufacturer(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getManufacturerList(): Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(`${this.baseUrl}`);
  }
}

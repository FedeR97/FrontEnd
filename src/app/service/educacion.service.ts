import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL +'educacion/';

  constructor(private httpclient : HttpClient) {}

    public lista(): Observable<Educacion[]>{
      return this.httpclient.get<Educacion[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Educacion>{
      return this.httpclient.get<Educacion>(this.URL + `detail/${id}`);
    }

    public save(educacion: Educacion): Observable<any>{
      return this.httpclient.post<any>(this.URL + 'create',educacion);
    }

    public update(id: number, educacion: Educacion): Observable<any>{
      return this.httpclient.put<any>(this.URL + `update/${id}`, educacion);
    }

    public delete(id: number): Observable<any>{
      return this.httpclient.delete<any>(this.URL + `delete/${id}`);
    }
}

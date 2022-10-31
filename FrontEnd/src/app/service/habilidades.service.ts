import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = environment.URL +'habilidades/';

  constructor(private httpclient : HttpClient) {}

    public lista(): Observable<Habilidades[]>{
      return this.httpclient.get<Habilidades[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Habilidades>{
      return this.httpclient.get<Habilidades>(this.URL + `detail/${id}`);
    }

    public save(habilidades: Habilidades): Observable<any>{
      return this.httpclient.post<any>(this.URL + 'create',habilidades);
    }

    public update(id: number, habilidades: Habilidades): Observable<any>{
      return this.httpclient.put<any>(this.URL + `update/${id}`, habilidades);
    }

    public delete(id: number): Observable<any>{
      return this.httpclient.delete<any>(this.URL + `delete/${id}`);
    }
}

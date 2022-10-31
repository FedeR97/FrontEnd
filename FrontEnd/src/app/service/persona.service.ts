import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL +'personas/';

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<persona[]>{
      return this.httpclient.get<persona[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<persona>{
      return this.httpclient.get<persona>(this.URL + `detail/${id}`);
    }

    /*public save(educacion: Educacion): Observable<any>{
      return this.httpclient.post<any>(this.URL + 'create',educacion);
    }*/

    public update(id: number, Persona: persona): Observable<any>{
      return this.httpclient.put<any>(this.URL + `update/${id}`, Persona);
    }

    /*public delete(id: number): Observable<any>{
      return this.httpclient.delete<any>(this.URL + `delete/${id}`);
    }*/
}

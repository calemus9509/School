import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private urlBase = "http://localhost:9000/especialidades"
  // el httpheaders se importa - indica al backend que lo que estoy enviando es en formato json
  private headers = new HttpHeaders().append("Content-Type", "application/json");


  constructor(private http: HttpClient) {}
  obtenerEspecialidades(){
    return this.http.get<any>(this.urlBase, {headers: this.headers})
  }
  obtenerPorId(id: any){
    return this.http.get<any>(`${this.urlBase}/${id}`, {headers: this.headers})
  }

  guardar(data: any, id: any){
    if(id != undefined && id !=0){
      return this.http.put<any>(this.urlBase + '/' + id, data, {headers: this.headers})
    }else{
      
      return this.http.post<any>(this.urlBase, data, {headers: this.headers})
    }
  }

  delete(id: any){
    return this.http.delete<any>(`${this.urlBase}/${id}`,{headers: this.headers})
  }
}

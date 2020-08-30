import { Injectable } from '@angular/core';
import {  Sportyshoe} from './sportyshoe'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  public shoeList:Sportyshoe[];
  sportyshoe:Sportyshoe;
  public url:string;
  constructor(private http:HttpClient) { 
  this.url="http://localhost:9002/shoemodel"
  }

  public getshoes():Observable<Sportyshoe[]>{
    return this.http.get<Sportyshoe[]>(this.url+"s");
  }
  public createshoe(sportyshoe:Sportyshoe){
    return this.http.post<Sportyshoe>(this.url,sportyshoe);
  }
  public findshoebyid(id:number):Observable<Sportyshoe>{
    return this.http.get<Sportyshoe>(this.url+"/"+id);
  }
  public findshoebycategory(category:string):Observable<Sportyshoe[]>{
    return this.http.get<Sportyshoe[]>(this.url+"s"+"/"+category);
  }
  public deleteshoebyid(id:number):Observable<Sportyshoe>{
    return this.http.delete<Sportyshoe>(this.url+"/"+id);
  }
}

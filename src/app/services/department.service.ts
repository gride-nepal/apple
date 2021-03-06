import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Department} from 'src/app/models/department-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  readonly APIUrl ="http://localhost:4200/api";
  getDepList(): Observable<Department[]>{
    return this.http.get<Department[]>(this.APIUrl + '/department');
  }
}

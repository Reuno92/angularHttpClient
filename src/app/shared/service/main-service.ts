import { Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Main} from '../model/main';

const baseUri = 'https://jsonplaceholder.typicode.com/';
const main = 'users/1';
const jsonHeaders = new HttpHeaders({'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'});

@Injectable()
export class MainService implements OnInit {

  mainRequest = baseUri + main;

  jsonOption = jsonHeaders;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.getMain());
  }

  getMain(): Observable<Main> {
    return this.http.get<Main>(this.mainRequest);
  }

}

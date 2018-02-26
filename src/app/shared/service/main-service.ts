import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Main} from '../model/main';


const baseUri = 'http://localhost:3000/';
const jsonDirectory = 'javascripts/';
const main = 'main.json';


// const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});


@Injectable()
export class MainService implements OnInit {
  mainRequest = baseUri + jsonDirectory + main;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.getMain());
  }

  getMain(): Observable<Main> {
    return this.http.get<Main>('http://localhost:3000/main.json');
  }

}

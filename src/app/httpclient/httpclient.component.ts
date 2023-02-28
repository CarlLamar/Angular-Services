import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientService implements OnInit {
  constructor(private http: HttpClient) {}

  getUsersfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

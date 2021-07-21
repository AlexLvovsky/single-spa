import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  dataUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<User[]> {
    return this.http.get<any[]>(this.dataUrl)
      .pipe(
        map(items => {
          return items.map(item => {
            const user: User = {
              id: item.id,
              name: item.name,
              userName: item.username,
            };
            return user;
          });

        })
      );
  }
}

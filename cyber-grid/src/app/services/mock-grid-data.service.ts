import { Observable, Observer } from "rxjs";
import { User } from "../models/user.model";

let mockData = [
  {
    id: 1,
    name: 'Alex Lvovsky',
    username: 'alvovsky'
  },
  {
    id: 2,
    name: 'Royee Shemesh',
    username: 'rshemesh'
  },
  {
    id: 3,
    name: 'Michail Rogov',
    username: 'mrogov'
  }
];

export class MockUserGridService {
  getUsers() {
    return new Observable((observer: Observer<Array<User>>) => {
      observer.next(mockData);
    });
  }
}

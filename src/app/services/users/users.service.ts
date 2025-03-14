import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersApi='https://jsonplaceholder.typicode.com/users';
  http=inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(this.usersApi);
  }

  constructor() { }
}

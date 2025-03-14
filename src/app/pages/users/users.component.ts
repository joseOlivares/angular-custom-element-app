import { Component, inject, OnInit} from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  private usersService=inject(UsersService);

  users: User[]=[];

   ngOnInit(): void {
    this.usersService.getUsers().subscribe(users=>{
      this.users=users;
    })
   }
}

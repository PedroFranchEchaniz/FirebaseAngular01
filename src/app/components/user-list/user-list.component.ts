import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: any[] = [];


  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      // ngOnInit(): void {
      //   this.users = await this.userService.getUsers();
      // }
    });
  }
}

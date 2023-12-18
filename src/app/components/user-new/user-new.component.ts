import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrl: './user-new.component.css'
})
export class UserNewComponent {

  name: string = '';
  age: number = 0;
  users: any[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(users => {
      this.users = users;
    });
    // ngOnInit(): void {
    //   this.users = await this.userService.getUsers();
    // }
  }

  addUser() {
    this.userService.createUser(this.name, this.age);
  }
}

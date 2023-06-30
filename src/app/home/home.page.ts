import { Component } from '@angular/core';
import { ApiService } from '../services/api-services';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: "root"
})

export class HomePage {

  status: string = '';
  allUsers: any = [];
  filteredUsers: any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.status = 'loading';
    this.apiService.getUsers().subscribe(
      (users: any) => {
        if (users.length > 0) {
          this.status = '';
          for (let user of users) {
            this.allUsers.push({
              name: user.login,
              avatar: user.avatar_url,
              url: user.url,
            })
          }
          this.filteredUsers = this.allUsers;
        } else {
          this.status = 'No users returned...';
        }
      },
      (error: any) => {
        if (error.message) {
          this.status = error.message;
        }
        console.log(error);
      });
  }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredUsers = this.allUsers.filter((d: any) => d.name.toLowerCase().indexOf(query) > -1);
    console.log(this.filteredUsers)
  }


}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  public message : string|undefined ;
  constructor(private  userService :UserService) {
  }

  ngOnInit(): void {
  this.forUser()
    }
  forUser(){
    this.userService.forAdmin().subscribe(
       resp=> this.message = resp,
       error =>  console.log(error)
    );
  }

}

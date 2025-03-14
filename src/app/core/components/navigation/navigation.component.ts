import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  isAuthenticated = false;
  
  username = 'Anonymous';

   constructor() {
    this.isAuthenticated = false;
    this.username = 'Anonymous';

   }



   logout(){
   
   }

   loging(){

   }



}

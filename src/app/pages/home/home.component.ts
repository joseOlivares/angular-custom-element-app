import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit(): void {

    const Liferay = (window as any).Liferay; //Liferay Public JS API

    try {
      console.log('Liferay object: ', Liferay??'Liferay not found');
      console.log('Liferay user: ', Liferay?.ThemeDisplay?.getUserName()??'Liferay user not found');
    } catch (error: any) {
      console.error('Error al acceder al objeto Liferay:', error);
    }
  }

}

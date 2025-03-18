import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@Component({
  selector: 'sam-hardware', //sustituimos el selector por el nombre del custom element, antes app-root
  imports: [RouterOutlet,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'angular-custom-element-app';
}

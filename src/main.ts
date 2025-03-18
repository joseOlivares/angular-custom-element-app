import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';



import {createCustomElement} from '@angular/elements'; //custom elements

//import { ApplicationRef } from '@angular/core';


/* */
bootstrapApplication(AppComponent, appConfig)
.then((app) => { //Este bloque Then se agregó para que funcione el custom element
  const injector = app.injector;

  // Crear el Web Component
  const SamHardware = createCustomElement(AppComponent, { injector });

  if (!customElements.get('sam-hardware')) {
    customElements.define('sam-hardware', SamHardware);
  }

  console.log("✅ Custom Element 'sam-hardware' registrado exitosamente.");
})
  .catch((err) => console.error(err));



  /**
   * Para evitar errores de carga en Liferay usando custom elements, 
   * se debe usar createApplication en lugar de  bootstrapApplication  
   */

/*
createApplication(appConfig)
  .then((app) => {
    const injector = app.injector;

    // Crear el Web Component
    const SamHardware = createCustomElement(AppComponent, { injector });

    if (!customElements.get('sam-hardware')) {
      customElements.define('sam-hardware', SamHardware);
    }

    console.log("✅ Custom Element 'sam-hardware' registrado exitosamente.");
  })
  .catch((err) => console.error(err));
*/


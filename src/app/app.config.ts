import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, HttpClientModule, withFetch  } from '@angular/common/http';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    BrowserModule,
    FormsModule,
    CommonModule,
  ]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Mantém otimização de detecção de eventos
    provideRouter(routes), // Mantém o roteamento funcionando
    //provideClientHydration(withEventReplay())  ❌ Sem `provideClientHydration()`, então a hidratação continua desativada
  ]

};

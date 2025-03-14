import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
// import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';


bootstrapApplication(AppComponent, {
  ...appConfig, // Mantém os providers já existentes
  providers: [...(appConfig.providers || []), { provide: 'LOCALE_ID', useValue: 'pt-BR' }], // ✅ Adiciona LOCALE_ID sem perder outros providers
}).catch((err) => console.error(err));
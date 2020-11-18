import { BrowserModule } from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { CatalogItemComponent } from './main/catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu);

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StencilPocCardComponent } from './stencil-poc-card/stencil-poc-card.component';
import { StencilPocDatepickerComponent } from './stencil-poc-datepicker/stencil-poc-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    StencilPocCardComponent,
    StencilPocDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

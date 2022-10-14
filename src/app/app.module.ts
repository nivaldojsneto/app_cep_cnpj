import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { CepComponent } from './cep/cep.component';
import { CnpjComponent } from './cnpj/cnpj.component';
import { CepService } from './cep/cep.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    CnpjComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeNGModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CepService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

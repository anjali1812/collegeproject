import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule,
         MatIconModule,
         MatTableModule } from '@angular/material';

import { MatFormFieldModule } from "@angular/material/form-field";
import { SignValidationsComponent } from './sign-validations/sign-validations.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignValidationsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

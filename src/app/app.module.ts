import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { MatInputModule,
         MatIconModule,
         MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCheckboxModule} from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SignValidationsComponent } from './sign-validations/sign-validations.component';
import { SignupComponent } from './signup/signup.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    SignValidationsComponent,
    SignupComponent,
    EditprofileComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    routing,
    MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

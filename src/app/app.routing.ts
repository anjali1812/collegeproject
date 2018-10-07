import { Routes,RouterModule } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SignupComponent } from './signup/signup.component';
import { UsertableComponent } from './usertable/usertable.component';

const arr:Routes=[
  {path:'editprofile/:email_id',component:EditprofileComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:UsertableComponent}
];

export const routing=RouterModule.forRoot(arr);

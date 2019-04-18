import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { loginPage } from './login';

@NgModule({
  declarations: [
    loginPage,
  ],
  imports: [
    IonicPageModule.forChild(loginPage),
  ],
})
export class LoginPageModule {}
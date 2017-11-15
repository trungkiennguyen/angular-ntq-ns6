import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { StaffFormComponent } from './staff-form/staff-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormInputComponent,
    UserDisplayComponent,
    StaffFormComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

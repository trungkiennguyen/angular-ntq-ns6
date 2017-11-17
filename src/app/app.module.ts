import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TodoComponent } from './todo/todo.component';
import { NewTodoComponent } from './todo/new-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormInputComponent,
    UserDisplayComponent,
    StaffFormComponent,
    LoginFormComponent,
    TodoComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

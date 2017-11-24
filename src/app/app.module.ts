import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Router } from '@angular/router';

import { AdminGuard } from './guard/admin.guard';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TodoComponent } from './todo/todo.component';
import { NewTodoComponent } from './todo/new-todo.component';
import { EditTaskComponent } from './todo/edit-task.component';
import { appRoutes } from './app.routes';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AdminService } from './service/admin.service';
import { AuthGuard } from './auth.guard';
import { TodoHttpInterceptor } from './service/todo.interceptor';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ArayPipe } from './pipe/array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserFormInputComponent,
    UserDisplayComponent,
    StaffFormComponent,
    LoginFormComponent,
    TodoComponent,
    NewTodoComponent,
    EditTaskComponent,
    WeatherAppComponent,
    PagenotfoundComponent,
    LoginComponent,
    CapitalizePipe,
    ArayPipe
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRoutes,
    HttpClientModule
  ],
  providers: [
    AdminGuard,
    AdminService,
    AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TodoHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';

import { StaffFormComponent } from './staff-form/staff-form.component';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TodoComponent } from './todo/todo.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: UserFormInputComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'staff',
        component: StaffFormComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'todoapp',
        component: TodoComponent,
    },
    {
        path: 'weatherapp',
        component: WeatherAppComponent,
        canActivate: [AdminGuard]
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
]

export const appRoutes = RouterModule.forRoot(routes);
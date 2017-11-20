import { Routes, RouterModule } from '@angular/router';

import { StaffFormComponent } from './staff-form/staff-form.component';
import { UserFormInputComponent } from './user-form-input/user-form-input.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
    {
        path: '',
        component: UserFormInputComponent
    },
    {
        path: 'staff',
        component: StaffFormComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'todoapp',
        component: TodoComponent
    },    
]

export const appRoutes = RouterModule.forRoot(routes);
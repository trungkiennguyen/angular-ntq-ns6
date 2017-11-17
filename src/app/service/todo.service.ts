import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

    private todoUrl = 'https://5a09118f7e1850001267a856.mockapi.io/api/todoapp/todo/'
    constructor(private http: Http){}

    getTodoList() {
        return this.http.get(this.todoUrl).map(
            (result) => {
                return result.json();
            }
        );
    }

    addNewTask(task: any) {
        return this.http.post(this.todoUrl, task).map(result => result.json());
    }

    deleteTask(id: number) {
        return this.http.delete(this.todoUrl + id).map(
            (result) => {
                return result.json();
            }
        )
    }
}
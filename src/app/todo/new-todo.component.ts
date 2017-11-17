import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
    selector: 'app-new-todo',
    templateUrl: './new-todo.component.html',
    encapsulation: ViewEncapsulation.None,
  })
export class NewTodoComponent implements OnInit {

    todo: any;
    @Output() reloadList  = new EventEmitter<string>();
    constructor(private todoService: TodoService) { }

    ngOnInit() {

    }

    showLog(f) {
        console.log(f);
    }

    onSubmit(task: any) {
        this.todoService.addNewTask(task.value).subscribe(
            () => {
                task.reset();
                console.log('add new task success!');
                this.reloadList.emit();
            }
        )
    }
}
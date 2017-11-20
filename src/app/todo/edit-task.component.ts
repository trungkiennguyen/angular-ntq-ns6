import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
    selector: 'app-edit-task',
    templateUrl: './edit-task.component.html',
    providers: [TodoService]
})

export class EditTaskComponent implements OnInit{
    @Input() id: number;
    todo: any;

    constructor(private todoservice: TodoService) {
        
    }

    ngOnInit() {
        if(this.id) {
            this.todoservice.getTaskById(this.id).subscribe(
                (result) => {
                    this.todo = result;
                }
            )
        }
    }
}
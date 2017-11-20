import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NewTodoComponent } from './new-todo.component';
import { EditTaskComponent } from './edit-task.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  idTask: number;
  showEdit: boolean = false;
  todoList: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(
      (data) => {
        this.todoList = data;
      }
    );
  }

  deleteTask(idTask: number) {
    this.todoService.deleteTask(idTask).subscribe(
      (result) => {
        console.log('Delete task success!')
        this.ngOnInit();
      }
    )
  }

  taskDone(idTask: number) {
    
  }

  showFormEditTask(id) {
    this.idTask = id;
    console.log(this.idTask);
  }

}

import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import { Todo} from './class/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  task : Todo[];
  todo : Todo = {
    task:'',
    date:''
  };
  pos :number = 0;
  constructor(private element : TodoService ) { }

  ngOnInit() {
  }

  add()
  {
  	this.element.add();
  }

  edit(i,taskk:Todo)
  {
    this.pos = i;
    this.todo = taskk;
    // this.element.edit(this.pos,this.todo);
  }

  update()
  {
    this.element.update();
  }

  delete(i)
  {
    this.element.delete(i); 
  }

}

import { Injectable } from '@angular/core';
import {Todo} from '../class/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  item:any ="";
  task : string;
  date:string;

  list :Array< Todo > =[];
  newitem:Array<{task: string, date: string}>=[];
 
  constructor() { }
 
  public add()
  {
    let taskObj = new Todo();
    taskObj.task = this.task;
  
    taskObj.date = this.date;

    this.list.push(taskObj);
    //alert(this.list);
    this.task = "";
    this.date='';
    
    //console.log(this.task,this.date);
    // this.list.push({ task: this.task, date: this.date });
    // //console.log(this.list);
    // this.task = '';
    // this.date = '';
  }

  public edit(pos,)
  {
  	//alert(i);
  	// let index = this.list.indexOf(items);
  	//alert(index);
  	// this.newitem = this.list[i];
    //alert(this.newitem);
    
   //console.log(this.list[i].task,this.list[i].date);
  //  let newtaskObj = new Todo();
  //  newtaskObj.task = this.list[i].task;
  //  newtaskObj.date = this.list[i].date;
  
    this.newitem= this.list;
    //console.log(this.newitem[i].task);
  }

  public update()
  {
  	//let index = this.list.indexOf();
  	//alert(this.newitem+this.item)
  	//let updateditem = this.item;
  	//alert(updateditem);
  	// this.list[index] = updateditem;
  	// this.item = "";
  }

  public delete(i)
  {
  	//let index = this.list.indexOf(items);
  	//alert(index);
  	this.list.splice(i, 1);	 
  }
}

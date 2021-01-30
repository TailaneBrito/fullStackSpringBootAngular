import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){

  }

}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Learning to Dance', false, new Date()),
    new Todo(2,'Learning to Eat', false, new Date()),
    new Todo(3,'Learning to Walk', true, new Date()),
    new Todo(4,'Learning to Code', false, new Date()),
    new Todo(5,'Learning to Say No', false, new Date())

    // { id : 1, description :  },
    // { id : 2, description :  },
    // { id : 3, description :  },
    // { id : 4, description :  },
    // { id : 5, description :  },
  ]

  // todo = {
  //   id : 1,
  //   description : 'Learning to Dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

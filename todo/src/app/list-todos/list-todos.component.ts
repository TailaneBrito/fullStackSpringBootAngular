import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id : 1, description : 'Learning to Dance' },
    { id : 2, description : 'Learning to Eat' },
    { id : 3, description : 'Learning to Walk' },
    { id : 4, description : 'Learning to Code' },
    { id : 5, description : 'Learning to Say No' },
  ]

  // todo = {
  //   id : 1,
  //   description : 'Learning to Dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

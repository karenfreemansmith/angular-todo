import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Angular 2 ToDo List</h1>
      <div class="row">
        <div class="col-xs-6">
        <task-list
          [childTaskList]="masterTaskList"
          (clickSender)="showDetails($event)"
        ></task-list>
        <edit-task
          [childSelectedTask]="selectedTask"
          (doneClickedSender)="finishedEditing()"
        ></edit-task>
        </div>
        <div class="col-xs-6">
          <pies></pies>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

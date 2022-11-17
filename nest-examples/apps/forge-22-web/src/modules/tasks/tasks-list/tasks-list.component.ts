import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '@my-fullstack-app/types';
import { Subject, takeUntil } from 'rxjs';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'my-fullstack-app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];

  private onDestroy$ = new Subject<void>();

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks();
    this.tasksService.tasks
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(taskId: number) {
    this.tasksService.deleteTaskById(taskId);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

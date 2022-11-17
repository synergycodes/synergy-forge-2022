import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@my-fullstack-app/types';
import { Subject } from 'rxjs';

@Injectable()
export class TasksService {

  private tasks$ = new Subject<Task[]>;

  get tasks() {
    return this.tasks$.asObservable();
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getTasks() {
    this.httpClient.get<Task[]>('http://localhost:3333/api/tasks')
      .subscribe(tasks => this.tasks$.next(tasks));
  }

  deleteTaskById(id: number) {
    return this.httpClient.delete(`http://localhost:3333/api/tasks/${id}`)
      .subscribe(() => this.getTasks());
  }

}

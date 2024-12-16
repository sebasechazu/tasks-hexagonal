import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { TaskRepository } from '../../../core/repositories/task.repository';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskRepository: TaskRepository) { }

  ngOnInit() {

    this.loadTasks();
  
  }

  loadTasks(): void {
   this.taskRepository.getTasks().subscribe({
     next: (tasks: Task[]) => {
       this.tasks = tasks;
     },
     error: (error) => {
       console.error('Error al cargar las tareas:', error);
     },
   });
 }
}

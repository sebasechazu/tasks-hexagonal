import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskRepositoryImpl } from '../../infrastructure/repositories/task.repository.impl';
import { TaskRepository } from '../../core/repositories/task.repository';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [{ provide: TaskRepository, useClass: TaskRepositoryImpl }],
})
export class TasksModule { }

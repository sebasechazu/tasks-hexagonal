import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksModule } from './modules/tasks/tasks.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TasksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks-hexagonal';
}

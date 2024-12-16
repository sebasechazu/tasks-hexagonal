import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app.config';

export const routes: Routes = [
    { path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule) },
    
];
export const appRoutes = [provideRouter(routes), appConfig,];

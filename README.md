

### Mappers

Estos mapeadores nos ayudarán a convertir y manejar datos entre la capa de dominio y los adaptadores o servicios externos de una manera más sencilla.

```
├── src
│   ├── app
│   │   ├── core
│   │   │    ├── mappers
│   │   │    │    ├── task.mapper.ts

```

### Módulo y componente

Crearemos un nuevo componente que use el repositorio de tareas para obtener las tareas y luego mostrarlas en el HTML del componente.

```
├── src
│   ├── app
│   │   ├── modules
│   │   │    ├── tasks
│   │   │    │    ├── tasks.module.ts
│   │   │    │    ├── tasks-routing.module.ts
│   │   │    │    ├── components
│   │   │    │    │    ├── list-tasks
│   │   │    │    │    │    ├── list-tasks.component.html
│   │   │    │    │    │    ├── list-tasks.component.ts

```

En el archivo *list-tasks.component.ts,* inyectaremos el repositorio *TaskRepository* y así obtendremos las tareas en el método *loadTasks* cuando se ejecute el ciclo de vida del componente a través del *ngOnInit.*
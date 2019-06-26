import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { NavItem } from '../types/nav-item.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: Todo[], navState: NavItem): Todo[] {
    return todos.filter(todo => {
      if (navState === 'Active') { return !todo.completed; }
      if (navState === 'Completed') { return todo.completed; }
      return true;
    });
  }

}

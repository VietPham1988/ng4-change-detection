import { ToDo } from './todo.model';

export class Filter {
  constructor(
    public searchTerm: string
    , public todos: ToDo[]
  ) { }
}

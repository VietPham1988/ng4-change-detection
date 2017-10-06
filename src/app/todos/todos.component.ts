import {
  Component
  , OnInit
  , DoCheck
  , OnChanges
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked,
  Input,
  SimpleChanges} from '@angular/core';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() todos: ToDo[];

  constructor() {
    console.log('-Todo List constructor');
  }

  ngOnInit() {
    console.log('-Todo List ngOnInit');
  }

  ngDoCheck() {
    console.log('-Todo List DoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`-Todo List OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log('-Todo List ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('-Todo List ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('-Todo List ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('-Todo List ngAfterViewChecked');
  }

  private getRandomIndex(): number{
    return Math.floor(Math.random() * this.todos.length);
  }

  mutateRandomItem() {
    const randomIndex = this.getRandomIndex();
    const randomStr = `${(new Date()).getMilliseconds()}`;
    this.todos[randomIndex].text = `${this.todos[randomIndex].text} - ${randomStr}`;
  }

  immutateRandomItem() {
    const randomIndex = this.getRandomIndex();
    const randomStr = `${(new Date()).getMilliseconds()}`;
    this.todos[randomIndex] = new ToDo(
      this.todos[randomIndex].id,
      `${this.todos[randomIndex].text} - ${randomStr}`,
      !this.todos[randomIndex].checked
    );
  }
}

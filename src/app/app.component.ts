import {
  Component
  , OnInit
  , DoCheck
  , OnChanges
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked,
  SimpleChanges} from '@angular/core';
import { Filter } from './filter.model';
import { ToDo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  public title = 'app';
  public todos: Array<ToDo>;
  public filterData: Filter;

  constructor() {
    console.log('App constructor');
  }

  ngOnInit() {
    console.log('App ngOnInit');
    this.todos = new Array<ToDo>();
    for (let index = 1; index <= 5; index++) {
      this.todos.push(new ToDo(index , `To Do ${index}`, index % 2 === 0));
    }
    this.filterData = new Filter('search something', []);
    this.filterData.todos = [
      new ToDo(888, `To Do 888`, true)
      , new ToDo(999, `To Do 999`, true)
    ]
  }

  ngDoCheck() {
    console.log('App DoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`App OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log('App ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('App ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('App ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('App ngAfterViewChecked');
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

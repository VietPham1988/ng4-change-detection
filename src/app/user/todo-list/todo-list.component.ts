import {
  Component
  , OnInit
  , DoCheck
  , OnChanges
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , ChangeDetectionStrategy
  , Input
  , SimpleChanges} from '@angular/core';
import { ToDo } from '../../app.model';
import { DummyService } from '../../dummy.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() todos: Array<ToDo>;
  @Input() userId: number;

  constructor(private dummyService: DummyService) {
    console.log(`--User ${this.userId} Todo List constructor`);
  }

  ngOnInit() {
    console.log(`--User ${this.userId} Todo List ngOnInit`);
  }

  ngDoCheck() {
    console.log(`--User ${this.userId} Todo List DoCheck`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`--User ${this.userId} Todo OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log(`--User ${this.userId} Todo List ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`--User ${this.userId} Todo List ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`--User ${this.userId} Todo List ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`--User ${this.userId} Todo List ngAfterViewChecked`);
  }

  mutateRandomToDo() {
    this.dummyService.mutateRandomToDo(this.todos);
  }

  immutateRandomToDo() {
    this.todos = this.dummyService.immutateRandomToDo(this.todos);
  }
}

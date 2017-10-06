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
import { ToDo } from '../../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() todo: ToDo;

  constructor() {
    console.log(`--Todo constructor`);
  }

  ngOnInit() {
    console.log(`--Todo ${this.todo.id} ngOnInit`);
  }

  ngDoCheck() {
    console.log(`--Todo ${this.todo.id} DoCheck`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`--Todo ${this.todo.id} OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log(`--Todo ${this.todo.id} ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`--Todo ${this.todo.id} ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`--Todo ${this.todo.id} ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`--Todo ${this.todo.id} ngAfterViewChecked`);
  }

}

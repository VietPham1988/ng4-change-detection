import {
  Component
  , OnInit
  , DoCheck
  , OnChanges
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , Input
  , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-todo-text',
  templateUrl: './todo-text.component.html',
  styleUrls: ['./todo-text.component.css']
})
export class TodoTextComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() todoText: string;
  @Input() todoId: string;

  constructor() {
    console.log(`--- ${this.todoId} TodoText constructor`);
  }

  ngOnInit() {
    console.log(`--- ${this.todoId} TodoText ngOnInit`);
  }

  ngDoCheck() {
    console.log(`--- ${this.todoId} TodoText DoCheck`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`--- ${this.todoId} TodoText OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log(`--- ${this.todoId} TodoText ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`--- ${this.todoId} TodoText ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`--- ${this.todoId} TodoText ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`--- ${this.todoId} TodoText ngAfterViewChecked`);
  }

}

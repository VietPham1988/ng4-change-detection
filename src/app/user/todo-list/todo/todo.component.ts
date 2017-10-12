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
import { DummyService } from '../../../dummy.service';
import { ToDo } from '../../../app.model';

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
  @Input() userId: number;

  constructor(private dummyService: DummyService) {
    console.log(`---User ${this.userId} Todo constructor`);
  }

  ngOnInit() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} ngOnInit`);
  }

  ngDoCheck() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} DoCheck`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`---User ${this.userId} Todo ${this.todo.id} OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`---User ${this.userId} Todo ${this.todo.id} ngAfterViewChecked`);
  }

  mutate() {
    this.dummyService.mutateToDo(this.todo);
  }

  immutate() {
    this.todo = this.dummyService.immutateToDo(this.todo);
  }

}

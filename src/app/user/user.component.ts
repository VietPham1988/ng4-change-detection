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
import { User, ToDo } from '../app.model';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() user: User;
  public todos: ToDo[];

  constructor(private dummyService: DummyService) {
    console.log(`-User constructor`);
  }

  ngOnInit() {
    console.log(`-User ${this.user.id} ngOnInit`);
    this.todos = this.dummyService.getDummyToDos(4);
  }

  ngDoCheck() {
    console.log(`-User ${this.user.id} DoCheck`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`-User ${this.user.id} OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log(`-User ${this.user.id} ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`-User ${this.user.id} ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`-User ${this.user.id} ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`-User ${this.user.id} ngAfterViewChecked`);
  }

  mutateUser() {
    this.dummyService.mutateUser(this.user);
  }

  immutateUser() {
    this.user = this.dummyService.immutateUser(this.user);
  }

  mutateRandomToDo() {
    this.dummyService.mutateRandomToDo(this.todos);
  }

  immutateRandomToDo() {
    this.todos = this.dummyService.immutateRandomToDo(this.todos);
  }

}

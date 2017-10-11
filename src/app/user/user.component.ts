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
    this.dummyService.todos$.subscribe( todos => {
      if (todos[0].userId === this.user.id) {
        this.todos = todos;
      }
    });
    this.dummyService.getDummyToDos(this.user.id);
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

  immutateUser() {
    this.dummyService.immutateUser(this.user);
  }

  immutateRandomToDo() {
    this.dummyService.immutateRandomToDo(this.user.id);
  }

}

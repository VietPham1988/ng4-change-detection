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
  SimpleChanges,
  ChangeDetectionStrategy} from '@angular/core';
import { User } from '../app.model';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() user: User;

  constructor(private dummyService: DummyService) {
    console.log(`-User constructor`);
  }

  ngOnInit() {
    console.log(`-User ${this.user.id} ngOnInit`);
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
    this.dummyService.mutateRandomToDo(this.user.todos);
  }

  immutateRandomToDo() {
    this.user.todos = this.dummyService.immutateRandomToDo(this.user.todos);
  }

}

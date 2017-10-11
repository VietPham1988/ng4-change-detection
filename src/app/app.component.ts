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
import { User } from './app.model';
import { DummyService } from './dummy.service';

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
  public users: Array<User>;

  constructor(private dummyService: DummyService) {
    console.log('App constructor');
  }

  ngOnInit() {
    console.log('App ngOnInit');
    this.dummyService.users$.subscribe( users => this.users = users);
    this.dummyService.getDummyUsers();
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

  immutateRandomUser() {
    this.dummyService.immutateRandomUser();
  }
}

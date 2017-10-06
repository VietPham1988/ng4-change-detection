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
import { Filter } from '../filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit
, DoCheck
, OnChanges
, AfterContentInit
, AfterContentChecked
, AfterViewInit
, AfterViewChecked {
  @Input() filterData: Filter;

  constructor() {
    console.log('-Filter List constructor');
  }

  ngOnInit() {
    console.log('-Filter List ngOnInit');
  }

  ngDoCheck() {
    console.log('-Filter List DoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`-Filter List OnChanges`, changes);
  }

  ngAfterContentInit() {
    console.log('-Filter List ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('-Filter List ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('-Filter List ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('-Filter List ngAfterViewChecked');
  }
}

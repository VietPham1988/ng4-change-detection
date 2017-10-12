import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DummyService } from './dummy.service';

import { AppComponent } from './app.component';
import { TodoListComponent } from './user/todo-list/todo-list.component';
import { TodoComponent } from './user/todo-list/todo/todo.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

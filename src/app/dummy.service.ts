import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { User, ToDo } from './app.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DummyService {
  public users: Subject<Array<User>> = new Subject<Array<User>>();

  constructor() {}

  public getDummyUsers(count: number): Array<User>{
    let users = new Array<User>();

    for(let i =1; i <= count; i++){
      users.push(
        new User(
          i
          , `User ${i}`
          , this.getDummyToDos(count+1)
        )
      );
    }
    return users;
  }

  public getDummyToDos(count: number): Array<ToDo>{
    let todos = new Array<ToDo>();

    for(let i =1; i <= count; i++){
      todos.push(
        new ToDo(i, `ToDo ${i}`, i%2==0)
      );
    }
    return todos;
  }

  public mutateUser(user: User): void{
    user.name = this.addRandomSuffix(user.name);
  }

  public mutateRandomUser(users: Array<User>): void{
    this.updateRandomUserByRandomValue(users);
  }

  public mutateToDo(todo: ToDo): void{
    todo.text = this.addRandomSuffix(todo.text);
  }

  public mutateRandomToDo(todos: Array<ToDo>): void{
    this.updateRandomToDoByRandomValue(todos);
  }

  public immutateUser(user: User): User{
    let newUser = new User(user.id, user.name, this.createNewToDoArray(user.todos));
    newUser.name = this.addRandomSuffix(user.name);
    return newUser;
  }

  public immutateRandomUser(users: Array<User>): Array<User>{
    let newUsers = this.createNewUserArray(users);
    this.updateRandomUserByRandomValue(newUsers);
    return newUsers;
  }

  public immutateToDo(todo: ToDo): ToDo{
    let newToDo = new ToDo(todo.id, todo.text, todo.checked);
    newToDo.text = this.addRandomSuffix(newToDo.text);
    return newToDo;
  }

  public immutateRandomToDo(todos: Array<ToDo>): Array<ToDo>{
    this.updateRandomToDoByRandomValue(todos);
    return this.createNewToDoArray(todos);
  }

  private getRandomIndex(maxValue: number): number{
    return Math.floor(Math.random() * maxValue);
  }

  private addRandomSuffix(value: string): string{
    return `${value} - ${(new Date()).getMilliseconds()}`;
  }

  private updateRandomUserByRandomValue(users: Array<User>): Array<User>{
    const randonIndex = this.getRandomIndex(users.length);
    let randomUser = users[randonIndex];
    randomUser.name = this.addRandomSuffix(randomUser.name);
    return users;
  }

  private updateRandomToDoByRandomValue(todos: Array<ToDo>): Array<ToDo>{
    const randonIndex = this.getRandomIndex(todos.length);
    let randomToDo = todos[randonIndex];
    randomToDo.text = this.addRandomSuffix(randomToDo.text);
    return todos;
  }

  private createNewUserArray(users: Array<User>): Array<User>{
    return users.map(u => {
      return new User(
        u.id
        , u.name
        , this.createNewToDoArray(u.todos)
      )
    });
  }

  private createNewToDoArray(todos: Array<ToDo>): Array<ToDo>{
    return todos.map(t => {
      return new ToDo(
        t.id
        , t.text
        , t.checked
      )
    });
  }
}

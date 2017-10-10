import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { User, ToDo } from './app.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DummyService {
  private users: User[];
  private todos: ToDo[];

  public users$ = new Subject<User[]>();
  public todos$ = new Subject<ToDo[]>();
  constructor() {}

  private createDummyUsers(count: number): Array<User> {
    const users = new Array<User>();

    for (let i = 1; i <= count; i++) {
      users.push(
        new User(
          i
          , `User ${i}`
        )
      );
    }
    return users;
  }

  private createDummyToDos(count: number): Array<ToDo> {
    const todos = new Array<ToDo>();

    for (let i = 1; i <= count; i++) {
      todos.push(
        new ToDo(i, `ToDo ${i}`, i % 2 === 0)
      );
    }
    return todos;
  }

  public getDummyUsers(count: number) {
    this.users$.next(this.createDummyUsers(count));
  }

  public getDummyToDos(count: number) {
    this.todos$.next(this.createDummyToDos(count));
  }

  public mutateUser(user: User): void {
    user.name = this.addRandomSuffix(user.name);
  }

  public mutateRandomUser(users: Array<User>): void {
    this.updateRandomUserByRandomValue(users);
  }

  public mutateToDo(todo: ToDo): void {
    todo.text = this.addRandomSuffix(todo.text);
  }

  public mutateRandomToDo(todos: Array<ToDo>): void {
    this.updateRandomToDoByRandomValue(todos);
  }

  public immutateUser(user: User): User {
    const newUser = new User(user.id, user.name);
    newUser.name = this.addRandomSuffix(user.name);
    return newUser;
  }

  public immutateRandomUser(users: Array<User>): Array<User>{
    const newUsers = this.createNewUserArray(users);
    this.updateRandomUserByRandomValue(newUsers);
    return newUsers;
  }

  public immutateToDo(todo: ToDo): ToDo{
    const newToDo = new ToDo(todo.id, todo.text, todo.checked);
    newToDo.text = this.addRandomSuffix(newToDo.text);
    return newToDo;
  }

  public immutateRandomToDo(todos: Array<ToDo>): Array<ToDo> {
    this.updateRandomToDoByRandomValue(todos);
    return this.createNewToDoArray(todos);
  }

  private getRandomIndex(maxValue: number): number {
    return Math.floor(Math.random() * maxValue);
  }

  private addRandomSuffix(value: string): string{
    return `${value} - ${(new Date()).getMilliseconds()}`;
  }

  private updateRandomUserByRandomValue(users: Array<User>): Array<User> {
    const randonIndex = this.getRandomIndex(users.length);
    const randomUser = users[randonIndex];
    randomUser.name = this.addRandomSuffix(randomUser.name);
    return users;
  }

  private updateRandomToDoByRandomValue(todos: Array<ToDo>): Array<ToDo> {
    const randonIndex = this.getRandomIndex(todos.length);
    const randomToDo = todos[randonIndex];
    randomToDo.text = this.addRandomSuffix(randomToDo.text);
    return todos;
  }

  private createNewUserArray(users: Array<User>): Array<User>{
    return users.map(u => {
      return new User(
        u.id
        , u.name
      );
    });
  }

  private createNewToDoArray(todos: Array<ToDo>): Array<ToDo>{
    return todos.map(t => {
      return new ToDo(
        t.id
        , t.text
        , t.checked
      );
    });
  }
}

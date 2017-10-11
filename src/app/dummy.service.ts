import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { User, ToDo } from './app.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DummyService {
  private users = new Array<User>();
  private userTotalCount = 3;
  private todoTotalCount = 4;

  public users$ = new Subject<User[]>();
  public todos$ = new Subject<ToDo[]>();
  constructor() {
    this.users = this.createDummyUsers(this.userTotalCount);
  }

  private createDummyUsers(count: number): Array<User> {
    const users = new Array<User>();

    for (let i = 1; i <= count; i++) {
      users.push(
        new User(
          i
          , `User ${i}`
          , this.createDummyToDos(i, this.todoTotalCount)
        )
      );
    }
    return users;
  }

  private createDummyToDos(userId: number, count: number): Array<ToDo> {
    const todos = new Array<ToDo>();

    for (let i = 1; i <= count; i++) {
      todos.push(
        new ToDo(i, `ToDo ${i}`, userId)
      );
    }
    return todos;
  }

  public getDummyUsers() {
    this.users$.next(this.users);
  }

  public getDummyToDos(userId: number) {
    const user = this.users.find(u => u.id === userId);
    this.todos$.next(user.todos);
  }

  public immutateUser(user: User): void {
    const userIndex = this.users.indexOf(user);
    const newUser = new User(user.id, user.name, user.todos);
    newUser.name = this.addRandomSuffix(user.name);
    this.users[userIndex] = newUser;
    this.users$.next(this.users);
  }

  public immutateRandomUser(): void {
    const randomUserIndex = this.getRandomIndex(this.users.length);
    const randomUser = this.users[randomUserIndex];
    const newUser = new User(randomUser.id, randomUser.name, randomUser.todos);
    newUser.name = this.addRandomSuffix(randomUser.name);
    this.users[randomUserIndex] = newUser;
    this.users$.next(this.users);
  }

  public immutateToDo(todo: ToDo): void {
    const user = this.users.find(u => u.id === todo.userId);
    const todoIndex = user.todos.indexOf(todo);
    const newTodo = new ToDo(todo.id, todo.text, todo.userId);
    newTodo.text = this.addRandomSuffix(newTodo.text);
    user.todos[todoIndex] = newTodo;
    this.todos$.next(user.todos);
  }

  public immutateRandomToDo(): void {
    const randomUserIndex = this.getRandomIndex(this.userTotalCount);
    const randomToDoIndex = this.getRandomIndex(this.todoTotalCount);
    const randomTodo = this.users[randomUserIndex].todos[randomToDoIndex];
    const newTodo = new ToDo(randomTodo.id, randomTodo.text, randomTodo.userId);
    newTodo.text = this.addRandomSuffix(newTodo.text);
    this.users[randomUserIndex].todos[randomToDoIndex] = newTodo;
    this.todos$.next(this.users[randomUserIndex].todos);
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
}

export class User {
  constructor(
    public id: number
    , public name: string
    , public todos: Array<ToDo>
  ) { }
}

export class ToDo {
  constructor(
    public id: number
    , public text: string
    , public checked: boolean
  ) { }
}


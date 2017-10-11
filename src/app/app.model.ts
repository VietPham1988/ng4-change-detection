export class User {
  constructor(
    public id: number
    , public name: string
    , public todos: ToDo[]
  ) { }
}

export class ToDo {
  constructor(
    public id: number
    , public text: string
    , public userId: number
  ) { }
}


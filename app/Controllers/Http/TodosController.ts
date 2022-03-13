// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'
import Todo from '../../Models/Todo';

export default class TodosController {
  public async index() {
    const todos: Todo[] = await Todo.all()

    return View.render('todo', {todos: todos})
  }

  public async store() {
    await Todo.create({ name: "lorensum ipsum" })

    return "sukses"
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'
import Todo from '../../Models/Todo';

export default class TodosController {
  public async index() {
    const todos: Todo[] = await Todo.all()

    return View.render('todo', {todos: todos})
  }

  public async store({ request, response }: HttpContextContract) {
    const input = request.only(['name'])

    try {
      const users = await Todo.create(input)

      return response.status(200).json({ code: 200, status: 'success', data: users })
    } catch (error) {
      return response.status(500).json({ code: 500, status: 'error', message: error.message })
    }
  }
}

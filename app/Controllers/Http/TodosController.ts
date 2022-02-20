// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'

export default class TodosController {
  public async index() {
    return View.render('todo')
  }
}

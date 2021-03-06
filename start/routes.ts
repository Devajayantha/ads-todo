/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/todo', async () => {
  const { default: TodosController } = await import('App/Controllers/Http/TodosController')

  return new TodosController().index()
})

Route.get('/todo/store', async () => {
  const { default: TodosController } = await import('App/Controllers/Http/TodosController')
  const { default: HttpContextContract } = await import('@ioc:Adonis/Core/HttpContext')



  return new TodosController().store(HttpContextContract)
})

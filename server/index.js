const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
// const { htmlTpl, ejsTpl} = require('./tpl')
// const ejs = require('ejs')

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'saner'
  })
  // ctx.type= "text/html; charset=utf-8"
  // ctx.body = ejs.render(ejsTpl, {
  //   you: 'Luke',
  //   me: 'saner'
  // })

})
app.listen(4455)
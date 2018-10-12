module.exports = `
doctype html
html
  head
    meta(charset='utf-8')
    meta(name="viewport" content="width=device-wdith, initial-scale=1")
    title Koa Server HTML
    link(href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min.js")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.min.js")
  body
    .container
      .row
        .col-md-8
          h1 Hi #{you}
          p This is #{me}
        .col-md-4
          p 测试动态 HTML 页面
`
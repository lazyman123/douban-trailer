
module.exports = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'>
      <meta name="viewport" content="width=device-wdith, initial-scale=1">
      <title>Koa Server HTML</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Hi <%= me %></h1>
            <p>This is <%= you %></p>
          </div>
          <div class="col-md-4">
            <p>测试静态 HTM
            L 页面</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`
//TODO: have template html that will pull in user inputs

module.exports = generateTeam => {


    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/bootswatch.css">
    <link rel="stylesheet" href="./src/style.css">
    <title>Team Org</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Software Team!</a>
          </div>
        </div>
    </nav>
    <section id="cardMain">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-header">Manager</div>
          <div class="card-body">
            <h4 class="card-title">Jared</h4>
            <p class="card-text">ID: 11111</p>
            <p class="card-text">Email: abc@def.com</p>
            <p class="card-text">Phone: 333-333-3333</p>
          </div>
        </div>
    </section>
</body>
</html>`

};


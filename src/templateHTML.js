//TODO: have template html that will pull in user inputs

function  generateTeam (engineerArray,teamManager,internArray) {
  
    return `  
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./bootswatch.css">
    <link rel="stylesheet" href="./style.css">
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
          <div class="card-header">${teamManager.role}</div>
          <div class="card-body">
            <h4 class="card-title">${teamManager.name} </h4>
            <p class="card-text">ID: ${teamManager.id}</p>
            <p class="card-text">Email: ${teamManager.email}</p>
            <p class="card-text">Office Number: ${teamManager.officeNumber}</p>
          </div>
        </div>
    </section>
    ${engineerArray.map((engr) => `
    <section id="cardMain">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-header">${engr.role}</div>
          <div class="card-body">
            <h4 class="card-title">${engr.name} </h4>
            <p class="card-text">ID: ${engr.id}</p>
            <p class="card-text">Email: ${engr.email}</p>
            <p class="card-text">GitHub Username: ${engr.gitUsername}</p>
          </div>
        </div>
    </section>
    `)}
    ${internArray.map((intern) => `
    <section id="cardMain">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-header">${intern.role}</div>
          <div class="card-body">
            <h4 class="card-title">${intern.name} </h4>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: ${intern.email}</p>
            <p class="card-text">School: ${intern.school}</p>
          </div>
        </div>
    </section>
    `)}
</body>
</html>`

};

module.exports = generateTeam;
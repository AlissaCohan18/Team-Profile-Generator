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
          <div class="card-header">${teamManager.role} &nbsp &#9832;</div>
          <div class="card-body">
            <h4 class="card-title">${teamManager.name} </h4>
            <p class="card-text">ID: ${teamManager.id}</p>
            <a href="mailto:${teamManager.email}"class="card-text">Email: ${teamManager.email}</a><br>
            <a href="tel:${teamManager.officeNumber}" class="card-text">Office Number: ${teamManager.officeNumber}</a>
          </div>
        </div>
    </section>
    ${engineerArray.map((engr) =>
    `<section id="cardMain">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-header">${engr.role} &nbsp &#8486;</div>
          <div class="card-body">
            <h4 class="card-title">${engr.name} </h4>
            <p class="card-text">ID: ${engr.id}</p>
            <a class="card-text">Email: ${engr.email}</a><br>
            <a href="https://github.com/${engr.gitUsername}"class="card-text">GitHub Username: ${engr.gitUsername}</a>
          </div>
        </div>
    </section>
    `)}
    ${internArray.map((intern) => 
    `<section id="cardMain">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
          <div class="card-header">${intern.role} &nbsp &#9998; </div>
          <div class="card-body">
            <h4 class="card-title">${intern.name} </h4>
            <p class="card-text">ID: ${intern.id}</p>
            <a class="card-text">Email: ${intern.email}</a><br>
            <p class="card-text">School: ${intern.school}</p>
          </div>
        </div>
    </section>
    `)}
</body>
</html>`

};

module.exports = generateTeam;
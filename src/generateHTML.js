// Function to generate the template literals for the manager card
function renderManager(manager){
let card = `
<div class="card mx-3 shadow p-4 mb-5 rounded">
  <h4 class="card-header bg-danger">${manager.name}</h4>
  <h4 class="card-header bg-danger">${manager.role}</h4>
  <div class="card-body bg-light">
    <p class="card-text">ID: ${manager.id}</p>
    <hr class="hr4">
    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <hr class="hr4">
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
</div>
`;
return card;
}
// Function to generate the engineer template literal cards, appending it to a long string
function renderEngineer(engineers){
let cards = "";
    engineers.forEach(engineer => {
cards +=  `
<div class="card mx-3 shadow p-4 mb-5 rounded">
    <h4 class="card-header bg-warning">${engineer.name}</h4>
    <h4 class="card-header bg-warning">${engineer.role}</h4>
    <div class="card-body bg-light">
      <p class="card-text">ID: ${engineer.id}</p>
      <hr class="hr4">
      <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <hr class="hr4">
    <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>   
    `;
    });
    return cards;
}
// Function to generate the intern template literal cards from the intern array.
function renderIntern(interns){
let cards ="";
    interns.forEach(intern => {
cards += `
<div class="card mx-3 shadow p-4 mb-5 rounded">
  <h4 class="card-header bg-success">${intern.name}</h4>
  <h4 class="card-header bg-success">${intern.role}</h4>
  <div class="card-body bg-light">
    <p class="card-text">ID: ${intern.id}</p>
    <hr class="hr4">
    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <hr class="hr4">
    <p class="card-text">School: ${intern.school}</p>
  </div>
</div>
`;
    });
    return cards;
}
// One main function to print it to begin with, call the others to do so
function generateHTML(management, engineers, interns){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>${management[0].name}'s Team</title>
    </head>
    <body>
    <h1 class="jumbotron bg-info mb-5 text-center">The Team</h1>
    <div class="d-flex justify-content-center">
    ${renderManager(management[0])}
    </div>
    <div class="d-flex justify-content-center">
    ${renderEngineer(engineers)}
    </div>
    <div class="d-flex justify-content-center">
    ${renderIntern(interns)}
    </div>
      
    </body>
</html>`
}

// Export the main function so it may be called on index.
module.exports  = generateHTML;
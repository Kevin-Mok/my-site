const log = console.log

const headerKeys = {
  "status": "Status",
  "url": "URL",
  "description": "Description",
  "repo": "Repository"
}
const keyOrder = ["status", "url", "description", "repo"]

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  keyOrder.forEach(key => {
    let th = document.createElement("th");
    th.textContent = headerKeys[key];
    row.appendChild(th);
  })
}

function generateTable(table, data) {
  data.forEach(elem => {
    let row = table.insertRow();
    keyOrder.forEach(key => {
      const cell = row.insertCell();
      cell.className = key;
      const aElem = document.createElement('a')
      aElem.target = '_blank'
      switch (key) {
        case 'status':
          // cell.textContent = ((elem[key] == 'up') ? '🗸' : '✗')
          const statusIcon = document.createElement('img')
          statusIcon.src = '/img/server/' + ((elem[key] == 'up') ? 'check' : 'x') + '.svg'
          cell.appendChild(statusIcon)
          break
        case 'url':
          aElem.href = elem[key]
          aElem.textContent = elem['shortUrl']
          cell.appendChild(aElem)
          break
        case 'repo':
          aElem.href = elem['repoUrl']
          aElem.textContent = elem[key]
          cell.appendChild(aElem)
          break
        default:
          cell.textContent = elem[key]
      }
    })
  })
}

// fetch("http://localhost:1313/server-apps.json")
fetch("/server-apps.json")
  .then(response => response.json())
  .then(json => {
    // console.log(json)
    let table = document.querySelector("table");
    generateTable(table, json);
    generateTableHead(table);
  });


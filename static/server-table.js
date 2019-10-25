const log = console.log

const headerKeys = {
  "status": "Status",
  "url": "URL",
  "description": "Description",
  "repo": "Repository"
}
const keyOrder = ["status", "url", "description", "repo"]

const generateTableHead = table => {
  let thead = table.createTHead();
  let row = thead.insertRow();
  keyOrder.forEach(key => {
    let th = document.createElement("th");
    th.textContent = headerKeys[key];
    row.appendChild(th);
  })
}

const generateTable = (table, data) => {
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
        case 'description':
          cell.innerHTML = elem[key]
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

const getDurationSince = (date, verbose) => { 
  const milli = Math.abs(Date.now() - date)
  let mins = Math.floor(milli/1000/60)
  const days = Math.floor(mins/60/24)
  mins %= 60*24
  const hours = Math.floor(mins/60)
  mins %= 60

  let dayString = ''
  let hourString = ''
  let minString = ''
  if (days > 0) {
    dayString += days
    if (!verbose) {
      dayString += 'd '
    } else {
      dayString += (days == 1) ? ' day' : ' days'
      dayString += ', '
    }
  }
  if (hours > 0) {
    hourString += hours
    if (!verbose) {
      hourString += 'h '
    } else {
      hourString += (hours == 1) ? ' hour' : ' hours'
      hourString += ', '
    }
  }
  minString += (mins > 0) ? mins: '0' 
  if (!verbose) {
    minString += 'm'
  } else {
    minString += (mins == 1) ? ' minute' : ' minutes'
  }
  return dayString + hourString + minString
}

fetch("/server-apps.json")
  .then(response => response.json())
  .then(json => {
    let table = document.querySelector("table");
    generateTable(table, json['sites']);
    generateTableHead(table);
    document.querySelector('#last-updated-time').textContent =
      getDurationSince(new Date(json['updateTime']), false) + ' ago.'
    document.querySelector('#server-uptime-time').textContent = 
      getDurationSince(new Date(json['upSince']), true) + '.'
  });

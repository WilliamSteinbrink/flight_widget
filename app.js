const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: '08:11',
    destination: 'OMAN',
    flight: '0X 203',
    gate: 'A 01',
    remarks: 'ON TIME'
  },
  {
    time: '09:50',
    destination: 'NEW YORK',
    flight: '12345',
    gate: 'A 02',
    remarks: 'DELAYED'
  },
  {
    time: '08:11',
    destination: 'OMAN',
    flight: '0X 203',
    gate: 'A 01',
    remarks: 'ON TIME'
  },
  {
    time: '08:11',
    destination: 'OMAN',
    flight: '0X 203',
    gate: 'A 01',
    remarks: 'ON TIME'
  },
  {
    time: '08:11',
    destination: 'OMAN',
    flight: '0X 203',
    gate: 'A 01',
    remarks: 'ON TIME'
  },
  {
    time: '08:11',
    destination: 'OMAN',
    flight: '0X 203',
    gate: 'A 01',
    remarks: 'ON TIME'
  },
]

const destinations = ["TOKYO", "LONDON", "SCOTLAND", "MOSCOW", "LOS ANGELES", "DENVER"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15;

function populateTable() {
  flights.map((flight) => {
    const tableRow = document.createElement('tr')

    for (const flightDetail in flight) {
      const tableCell = document.createElement('td')
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div')

        setTimeout (() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)

      }
      tableRow.appendChild(tableCell)
    }
    tableBody.appendChild(tableRow)
  })
}

populateTable();

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
  const numbers = '0123456789'
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
  let displayHour = hour;

  if (hour <= 24) {
    hour ++
  }
  if (hour >= 25) {
    hour = 1;
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = "0" + hour
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  })
  tableBody.textContent = ''
  populateTable()
}

setInterval(shuffleUp, 5000)
function tickets(array, sortCriteria) {

    function splitLine(line) { return line.split('|') };

    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    }
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination; 
            this.price = price; 
            this.status = status; 
        }
    }

    const sortMapper =  {
        // if we sort by destination (Ticket, Ticket) =>
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }
    return array
        .map(splitLine)//[[destination, price, status], [destination, price, status]...]
        .map(convertToTicket)// [Ticket, Ticket, Ticket]
        .sort(sortMapper[sortCriteria]) // sorted array
}

// function tickets(arr, crit) {
//     function Ticket(destination, price, status) {
//       Object.assign(this, {destination, price, status})
//     }
//     return arr.map(el => {
//       return new Ticket(...el.split('|').map(el => Number(el) || el))
//     }).sort((a, b) => isNaN(a[crit]) ? a[crit].localeCompare(b[crit]) : a[crit] - b[crit])
//   }
console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));
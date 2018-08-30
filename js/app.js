/*
  Please add all Javascript code to this file.
*/

const fetch = require('node-fetch')
const auth = require('./auth.js')

const token = auth.apiToken
const clientId = auth.clientId
const timestamp = auth.timestamp

async function getUpcomingEvents() {
  const getReq = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const upcomingEvents = `https://livestreamapis.com/v3/accounts/12963240/upcoming_events?clientId=${clientId}&token=${token}&timestamp=${timestamp}`
  const res = await fetch(upcomingEvents, getReq);
  const json = await res.json()
  console.log(json)
}

getUpcomingEvents()
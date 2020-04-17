addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest() {
  let num = (Math.random() >= 0.5) ? 0 : 1; // pick 0 or 1 with 50/50 chance
  return fetch('https://cfw-takehome.developers.workers.dev/api/variants') // request URLS from API
    .then((resp) => resp.json()) // parse response as JSON
    .then((resp) => fetch(resp.variants[num].toString())) // pick one of the URLS
}
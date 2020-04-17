addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

// console.log(response.headers.get('Content-Type'));
// console.log(JSON.parse(JSON.stringify(response)).url)
// return fetch('https://cfw-takehome.developers.workers.dev/api/variants').then(function(response) {
//   return response;
// })

let variants;

async function handleRequest(request) {
  // make fetch request to URL
  let urls = reqURLS('https://cfw-takehome.developers.workers.dev/api/variants');
  return urls;
  // return fetch('https://cfw-takehome.developers.workers.dev/variants/1');
}

async function reqURLS(request){
  return fetch(request)
    .then((resp) => resp.json())
    .then((resp) => new Response(resp.variants))
}

// out of two urls, pick one with a 50/50 chance
async function pickURL(){
  if (Math.random() >= 0.5){
    return 0
  }
  else{
    return 1
  }
}
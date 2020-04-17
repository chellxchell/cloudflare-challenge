addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest() {
  const res = await pickURL()
  return new HTMLRewriter().on('*', new ElementHandler()).transform(res)
}


async function pickURL(){
  let num = (Math.random() >= 0.5) ? 0 : 1; // pick 0 or 1 with 50/50 chance
  return fetch('https://cfw-takehome.developers.workers.dev/api/variants') // request URLS from API
    .then((resp) => resp.json()) // parse response as JSON
    .then((resp) => fetch(resp.variants[num].toString())) // pick one of the URLS
}

// element handler for HTML Rewriter
class ElementHandler {
  element(element) {
    let classes = element.getAttribute('class')

    if (element.tagName == 'h1'){
      element.setInnerContent("Welcome to Chelly's project!")
      element.setAttribute('style', 'color: #fc9f9f; font-weight: bold')
    }

    else if (element.tagName == 'a'){
      const attribute = element.getAttribute('href')
      element.setAttribute('href',attribute.replace('cloudflare.com', 'chellycompendio.com'))
      element.setInnerContent('Go to my portfolio!')
    }

    else if (element.tagName == 'title'){
      element.setInnerContent("Chelly's Project")
    }

    else if (element.tagName == "p"){
      element.setInnerContent("My name is Chelly Compendio and I would like to be a full-stack developer intern at Cloudflare.")
    }
    
    else if (element.tagName == "body"){
      element.setAttribute('style', "background-image: url('https://www.designyourway.net/blog/wp-content/uploads/2018/11/pastel-background-goo-1250x834.jpg'); background-repeat: no-repeat; background-size: cover")
    }

      if (classes){
        if (classes.includes("bg-green-100")){
          element.setAttribute('style', 'background-color: #fc9f9f;')
        }
        if (classes.includes("text-green-600")){
          element.setAttribute('style', 'color: white')
        }
      }
  }

}
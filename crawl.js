const { JSDOM } = require("jsdom");

  async function crawlPage(currentUrl)
 {
     console.log(`actively crawling: ${currentUrl}`);
     try {
        const resp=await fetch(currentUrl);     
        if(resp.status>399)
        {
            console.log(`error in fetch with status code:${resp.status} on page:${currentUrl}`);
            return
        }

        //to check the response recieved is html or not
        const contentType=resp.headers.get("content-type")
        if(!contentType.includes('text/html'))
        {
            console.log(`non html response: content-type: ${contentType} on page: ${currentUrl}`);
            return
        }
        console.log(await resp.text());              //printing the html code as string
     } catch (err) {
        console.log(`error in fetch: ${err.message}, on page ${currentUrl} `);
        
     }            

 }

function getUrlsFromHtml(HtmlBody, baseUrl) {
  const urlsInPage = [];
  const dom = new JSDOM(HtmlBody); //jsdom converts html code into string
  const linkElements = dom.window.document.querySelectorAll("a"); //selecting <a> tag from the html body
  for (const linkelement of linkElements) {
    if (linkelement.href.slice(0, 1) === "/") {
      //relative url parsing

      try {
        const urlObj = new URL(`${baseUrl}${linkelement.href}`);
        urlsInPage.push(urlObj.href);
      } catch (err) {
        console.log(`error with the relative url :${err.message}`);
      }
    } else {
      //absolute url parsing
      try {
        const urlObj = new URL(`${linkelement.href}`);
        urlsInPage.push(urlObj.href);
      } catch (err) {
        console.log(`error with the absolute url :${err.message}`);
      }
    }
  }
  return urlsInPage;
}

function normalizeUrl(urlString) {
  const urlObject = new URL(urlString);
  const hostPath = `${urlObject.hostname}${urlObject.pathname}`; //returning only the hostname and pathname
  if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
    return hostPath.slice(0, -1); //slicing the '/' from the url
  }
  return hostPath;
}
module.exports = { normalizeUrl, getUrlsFromHtml,crawlPage};

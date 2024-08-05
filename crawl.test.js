const { normalizeUrl, getUrlsFromHtml } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test(normalizeUrl, () => {
  const input = "https://google.com";
  const actual = normalizeUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
  //above line checks whether the expected and actual outputs are same or not
});
test(normalizeUrl, () => {
  const input = "http://google.com/";
  const actual = normalizeUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
});
test(normalizeUrl, () => {
  const input = "http://GOOGLE.com/";
  const actual = normalizeUrl(input);
  const expected = "google.com";
  expect(actual).toEqual(expected);
});
test(getUrlsFromHtml, () => {
  const inputHtmlBody = `
    <html>
    <body>
    <a href="http://google.com/">
    this is google
    </a>
    
    </body>
    </html>
    `;
  const inputBaseUrl = "http://google.com/";
  const actual = getUrlsFromHtml(inputHtmlBody, inputBaseUrl);
  const expected = ["http://google.com/"];
  expect(actual).toEqual(expected);
});

//test case 5 for relative and absolute url
test(getUrlsFromHtml, () => {
  const inputHtmlBody = `
    <html>
    <body>
    <a href="/path1/">
    this is google
    </a>
    <a href="http://google.com/">
    this is google
    </a>
    </body>
    </html>
    `;
  const inputBaseUrl = "http://google.com";
  const actual = getUrlsFromHtml(inputHtmlBody, inputBaseUrl);
  const expected = ["http://google.com/path1/", "http://google.com/"];
  expect(actual).toEqual(expected);
});

//test case 6 for checking invalid url
test(getUrlsFromHtml, () => {
  const inputHtmlBody = `
    <html>
    <body>
    <a href="invald link">
    this is google
    </a>
    </body>
    </html>
    `;
  const inputBaseUrl = "http://google.com";
  const actual = getUrlsFromHtml(inputHtmlBody, inputBaseUrl);
  const expected = [];
  expect(actual).toEqual(expected);
});

# web-crawler
<!-- .test.js extension is used for testing purposes. jest identifies files using this extension -->
A Node.js web crawler is a program written in Node.js designed to automatically navigate and extract data from websites. Web crawlers, also known as spiders or bots, systematically browse the web to index or collect information for various purposes, such as search engine indexing, data mining, or web scraping.

Key Components of a Node.js Web Crawler
HTTP Requests: The crawler sends HTTP requests to web servers to fetch web pages. This can be done using various libraries such as axios, request (deprecated), or the built-in http and https modules.

HTML Parsing: After fetching the web pages, the crawler needs to parse the HTML content to extract the required information. Libraries like cheerio (which implements a subset of jQuery for the server) are commonly used for this purpose.

Link Extraction: The crawler identifies and extracts hyperlinks from the fetched web pages to discover new pages to crawl.
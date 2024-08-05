# Web Crawler

A web crawler implemented in Node.js using JSDOM, designed to recursively crawl web pages starting from a given base URL. This crawler respects the `robots.txt` file, uses a delay between requests to avoid being blocked, and sets a user-agent string.

## Features

- Recursively crawls web pages.
- Avoids external links.
- Counts the number of times a page is visited.
- Adds a delay between requests to avoid overwhelming servers.
- Sets a custom user-agent string.
- Respects the `robots.txt` file.
- Provides a sorted report of the most visited pages.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/web-crawler.git
   cd web-crawler
2. Install the required dependencies:
   npm install
## Usage
1. Run the crawler with a base URL: node crawl.js https://example.com
2. The crawler will start crawling from the provided base URL and print a report of the most visited pages.

## Code Overview
# crawl.js
This file contains the main crawling logic.

1. crawlPage(baseUrl, currentUrl, pages, delay): Recursively crawls pages starting from currentUrl.
2. getUrlsFromHtml(htmlBody, baseUrl): Extracts URLs from the HTML body.
3. normalizeUrl(urlString): Normalizes URLs by stripping the trailing slash and converting the hostname to lowercase.

# report.js
This file contains functions for sorting pages and printing the crawl report.

1. sortPages(pages): Sorts the pages by the number of visits.
2. printReport(pages): Prints the crawl report.

## Testing
The project uses Jest for testing. The tests cover URL normalization, URL extraction from HTML, and page sorting.
To run the tests: npm test

## Example
Example output of running the crawler on https://example.com:
starting crawl of https://example.com!
Actively crawling: https://example.com
...
==============
REPORT
==============
Found 5 links to page: https://example.com/path1
Found 3 links to page: https://example.com
Found 2 links to page: https://example.com/path2
Found 1 links to page: https://example.com/path
==============
END REPORT
==============

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
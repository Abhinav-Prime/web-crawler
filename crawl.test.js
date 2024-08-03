const {normalizeUrl}=require('./crawl.js')
const {test,expect}=require('@jest/globals')

test(normalizeUrl,()=>{
  const input='https://google.com'
  const actual=normalizeUrl(input)
  const expected='google.com'
  expect(actual).toEqual(expected);  
  //above lines checks whether the expected and actual outputs are same or not

}
)
test(normalizeUrl,()=>{
  const input='http://google.com/'
  const actual=normalizeUrl(input)
  const expected='google.com'
  expect(actual).toEqual(expected);  
  //above lines checks whether the expected and actual outputs are same or not

}
)
test(normalizeUrl,()=>{
  const input='http://GOOGLE.com/'
  const actual=normalizeUrl(input)
  const expected='google.com'
  expect(actual).toEqual(expected);  
  //above lines checks whether the expected and actual outputs are same or not

}
)


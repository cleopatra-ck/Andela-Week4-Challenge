const sources= require("./index.js");

//jest.mock('../request');

test('works with promises', () => {
  expect.sources(1);
  return user.sources(1).then(sources=> expect(sources).toEqual('bbcnews'));
});

  
 /* const standard_input = process.stdin;

   standard_input.on("data", data => {
         
    
   if (input= Number(data)) {
      
      console.log("Loading.....")
    }
    else {
    console.log("Please enter a valid news-source")
      })*/

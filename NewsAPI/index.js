const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('78a4fb35fbff46538b0559c8ee2eab76');


console.log("Please select a news-source number from the list below; \n 1. bbc-news \n 2. bbc-sport \n 3. business-insider-uk \n 4. buzzfeed \n");


const news_sources = { 1: "bbc-news", 2: "bbc-sport",  3: "business-insider-uk",   4: "buzzfeed" };

  
  const standard_input = process.stdin;

   standard_input.on("data", data => {
         
    
   if (input= Number(data)) {
      
      console.log("Loading.....")
    }
    else {
    console.log("Please enter a valid news-source")
      }



newsapi.v2.topHeadlines({

  sources:news_sources[input],
  pageSize: 10

  })
  
  
  .then(response => {

    console.log(response);

   //process.exit();
 
})


.catch((e) => {})

});

<<<<<<< HEAD
module.exports = NewsAPI;
=======
module.exports = newsapi;


>>>>>>> 4878de583d187e85eaffe2dcdd3ea68cc014f57d

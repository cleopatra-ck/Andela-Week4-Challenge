const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('78a4fb35fbff46538b0559c8ee2eab76');


console.log("Please select a news-source number from the list below; \n 1. bbc-news \n 2. bbc-sport \n 3. business-insider-uk \n 4. buzzfeed \n");


const news_sources = { 1: "bbc-news", 2: "bbc-sport",  3: "business-insider-uk",   4: "buzzfeed" };


  
  const standard_input = process.stdin;

   standard_input.on("data", data => {
    
    const source = Number(data);

    const source_num = [1, 2, 3, 4];
    
    
   if (source_num.includes(source)) {
      
      console.log("Loading.....")
    }
    else {
    console.log("Please enter a valid news-source")
      }



newsapi.v2.topHeadlines({

  sources:news_sources[source],
  pageSize: 10

  })
  
  
  .then(response => {

    console.log(response);

   //process.exit();
 
})


.catch((e) => {})

});





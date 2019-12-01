const request = require('request');
const mysql = require('mysql');

module.exports = {
   getRandomImages: function(keyword, imageCount) {
      var requestURL = "https://api.unsplash.com/photos/random?query=" + keyword + "&count=" + imageCount + "&client_id=7f1093868f56a0a4b7d8695de76a8d84b3cbee797f9f22775c7ce0425c5e8bb2&orientation=landscape"

      return new Promise(function(resolve, reject) {
         request(requestURL, function(error, response, body) {
            if (!error) {
               var parsedData = JSON.parse(body);
               var imageURLs = [];

               for (let i = 0; i < imageCount; i++) {
                  imageURLs.push(parsedData[i].urls.regular)
               }

               resolve(imageURLs);


            }
            else {

               console.log("error", error);

            }
         });
      });
   },

   createConnection: function() {
      var conn = mysql.createConnection({
         host: "cst336db.space",
         user: "cst336_dbUser029",
         password: "qunm1v",
         database: "cst336_db029"
      });

      return conn;

   }
}

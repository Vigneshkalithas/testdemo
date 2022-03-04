const request = new XMLHttpRequest();

    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    
    request.send();
    
    

    request.onload = () => {
        var data = JSON.parse(request.response);
        // console.log(data);

         const asian = data.filter((datas) => datas.region && datas.region === "Asia");

         console.log(asian);
         
         for(let i=0; i<asian.length; i++){
                 console.log( asian[i].name)
             }
    
         const asiapopulation = asian.map((data) => data.population).reduce((sum,cv) => sum + cv);

          

         console.log(`3.Total Asian Population :  ${asiapopulation}`);
        
        
        

        }

    

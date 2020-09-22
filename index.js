const puppeteer = require("puppeteer");

(async()=>{
    try{
        let movieUrl = "https://www.themoviedb.org/";
        let browser = await puppeteer.launch({headless:false});
        let page = await browser.newPage();
        await page.setViewport({width:1270,height:800});
        await page.goto(movieUrl,{waitUntil:'networkidle2'});
        let popular = await page.evaluate(()=>{
            let movie = Array.from(document.querySelectorAll('div[id="popular_scroller"] > div[class="column_content flex scroller loaded"] > div[class="card style_1"] > div[class="content"] > h2 > a'), element => element.textContent)
            return movie;
        });
        console.log(popular);
    }catch(e){
        console.error(e);
    }
})();





   /*
        // let selectedType = "inTheater";
        // let type = {
        //     "streaming":0,
        //     "onTv":1,
        //     "forRent":2,
        //     "inTheater":3
        // }
        // const button = await page.$$('[class="no_click"]');

        // await button[type[selectedType]].click();
        */
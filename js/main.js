// external api to call for data : https://countriesnow.space/api/v0.1/countries/flag/images
const APIURL = "https://countriesnow.space/api/v0.1/countries/flag/images";

//const response = fetch(API);

let apiData = "";
const countryList = [];

const fetchData = async (url) => {
    const urlResponse = await fetch(url);
    console.log(urlResponse.status);
    console.log(urlResponse.statusText);
    apiData = await urlResponse.json();
    console.log(apiData);
    console.log(apiData.data[0]);
    const randomNumber = generateRandomNumbers();
    let urlToUse = apiData.data[randomNumber].flag;
    console.log(urlToUse)
    assignSrcOfImageTag(urlToUse);
    
    for(let i=0;i<apiData.data.length; i++)
    {
        //console.log(apiData.data[i].name)
        countryList.push(apiData.data[i].name);
       // console.log(apiData.data[i].flag);
       // console.log(countryList[i])
    }
    console.log(countryList.length)
};



const gameStartButton = document.querySelector('.gamestart');
console.log(gameStartButton);
gameStartButton.addEventListener('click',(e)=>{
    console.log(gameStartButton);
    fetchData(APIURL);
   gameStartButton.disabled = true;
   gameStartButton.style.color = "orange";

}
)

const assignSrcOfImageTag = (srcUrl) =>{
    console.log("In assign function")
    console.log(srcUrl)
    const imageDisplay = document.createElement('object');
    imageDisplay.data = srcUrl;
    imageDisplay.type = "image/svg+xml";
    imageDisplay.width = "50%"

    document.querySelector('.flag-image').append(imageDisplay);
    
    
    console.log(imageDisplay);
    //console.log(document.querySelector('.flag-image'));
    //document.querySelector('.flag-image').href = srcUrl;
   // console.log(document.querySelector('.flag-image'));
}

const generateRandomNumbers =() => {
 return   Math.floor(Math.random() * 220);
}

const nextQuestionDisplay = () => {
    
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

// ****************************** PRESTON *********************************

    let prestoncard = document.createElement('section');
    prestoncard.classList.add('classprestontext');
    prestoncard.classList.add('data');

    let prestonname = document.createElement('h2');
    let prestonmotto = document.createElement('h3');
    let prestonyear = document.createElement('p');
    let prestonpopulation = document.createElement('p');
    let prestonrain = document.createElement('p');

    prestonname.textContent = towns[6].name;
    prestonmotto.textContent = towns[6].motto;
    prestonyear.textContent = "It was founded in " + towns[6].yearFounded;
    prestonpopulation.textContent = "The Population is " + towns[6].currentPopulation;
    prestonrain.textContent = "Annual Rain fall: " + towns[6].averageRainfall;

    prestoncard.appendChild(prestonname);
    prestoncard.appendChild(prestonmotto);
    prestoncard.appendChild(prestonyear);
    prestoncard.appendChild(prestonpopulation);
    prestoncard.appendChild(prestonrain);

    document.querySelector('div.prestoncard').appendChild(prestoncard);

    let prestonphotosection = document.createElement('section');
    prestonphotosection.classList.add('classprestonphoto');

    let prestonphoto = document.createElement('img');
    prestonphotosection.classList.add('picture')

    prestonphoto.setAttribute('src','home_page/images/preston.jpg');
    prestonphotosection.appendChild(prestonphoto);
    document.querySelector('div.prestoncard').appendChild(prestonphotosection);


// ***************************** SODA SPRING **********************************

    let sodacard = document.createElement('section');
    sodacard.classList.add('classsodatext');
    sodacard.classList.add('data');

    let sodaname = document.createElement('h2');
    let sodamotto = document.createElement('h3');
    let sodayear = document.createElement('p');
    let sodapopulation = document.createElement('p');
    let sodarain = document.createElement('p');

    sodaname.textContent = towns[0].name;
    sodamotto.textContent = towns[0].motto;
    sodayear.textContent = "It was founded in " + towns[0].yearFounded;
    sodapopulation.textContent = "The population is " + towns[0].currentPopulation;
    sodarain.textContent = "Annual Rain fall: " + towns[0].averageRainfall;
    
    sodacard.appendChild(sodaname);
    sodacard.appendChild(sodamotto);
    sodacard.appendChild(sodayear);
    sodacard.appendChild(sodapopulation);
    sodacard.appendChild(sodarain);

    document.querySelector('div.sodacard').appendChild(sodacard);

    let sodaphotosection = document.createElement('section');
    sodaphotosection.classList.add('classsodaphoto');

    let sodaphoto = document.createElement('img');
    sodaphotosection.classList.add('picture')
    sodaphoto.setAttribute('src','home_page/images/soda.jpg');
    sodaphotosection.appendChild(sodaphoto);
    document.querySelector('div.sodacard').appendChild(sodaphotosection);



// ***************************** FISH HEAVEN **********************************

    let fishcard = document.createElement('section');
    fishcard.classList.add("classfishtext");
    fishcard.classList.add('data');

    let fishname = document.createElement('h2');
    let fishmotto = document.createElement('h3');
    let fishyear = document.createElement('p');
    let fishpopulation = document.createElement('p');
    let fishrain = document.createElement('p');

    fishname.textContent=  towns[2].name;
    fishmotto.textContent = towns[2].motto;
    fishyear.textContent = "It was founded in " + towns[2].yearFounded;
    fishpopulation.textContent = "The population is " + towns[2].currentPopulation;
    fishrain.textContent = "Annual Rain Fall: " + towns[2].averageRainfall;

    fishcard.appendChild(fishname);
    fishcard.appendChild(fishmotto);
    fishcard.appendChild(fishyear);
    fishcard.appendChild(fishpopulation);
    fishcard.appendChild(fishrain);
    
    document.querySelector('div.fishcard').appendChild(fishcard);

    let fishphotosection = document.createElement('section');
    fishphotosection.classList.add('classfishphoto');

    let fishphoto = document.createElement("img");
    fishphoto.classList.add('picture')
    fishphoto.setAttribute('src','home_page/images/fish.jpg');
    fishphotosection.appendChild(fishphoto);
    document.querySelector('div.fishcard').appendChild(fishphotosection);

  });

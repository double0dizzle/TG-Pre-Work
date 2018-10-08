// Foursquare API Info
const clientId = 'JRSG1OPQXFOZ40RMY3NTEU0TS0W5FJYI5C0WAJ0VZ3IEGTH4';
const clientSecret = 'GNOUNRNL2B1XJXFZYQOYCLWI0ZN3GWYLJUWKXG1GAZWO3N2C';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// APIXU Info
const apiKey = 'cb8052a6e73f42e4a7851113180810';
const forecastUrl = 'https://api.apixu.com/v1/current.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
const city = $input.val();
const urlToFetch = url + city + '&limit=10&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20181008';
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    }
    else {
      throw new Error('Request failed!')
    }
  }
  catch(error){
    console.log(error.message)
  }
}

const getForecast = async () => {
  const urlToFetch = forecastUrl + apiKey + '&q=' + $input.val() + '&days=4&hour=11'; 
try{
  const response = await fetch(urlToFetch);
  if(response.ok){
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const days = jsonResponse.forecast.forecastDay;
    return days;
  }
  else {
    throw new Errow ('Result failed!');
  }
}
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
    const currentDay = days[index];
    let weatherContent = createWeatherHTML(currentDay);
    $day.append(weatherContent);
  });
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)
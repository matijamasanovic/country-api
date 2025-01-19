# country-api

This project demonstrates how to use the [REST Countries API](https://restcountries.com) to fetch and display information about a country using JavaScript and the `XMLHttpRequest` object. **This project does not include any CSS as it is purely a demonstration of API handling.**

## Features
- Fetch country data from the REST Countries API.
- Parse and display the country's:
  - Flag
  - Name
  - Population
  - Currency

## Technologies Used
- HTML
- JavaScript
- [REST Countries API](https://restcountries.com)

## How It Works
The project uses an `XMLHttpRequest` to send a `GET` request to the REST Countries API to fetch information about Serbia. The returned data is parsed into a usable format and dynamically injected into the DOM to display information about the country.

## Code Overview
### API Call
The project makes an HTTP GET request to the following endpoint:
```javascript
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/serbia');
request.send();
```

### Parsing and Displaying Data
Once the data is received, the `load` event listener is triggered, and the response is parsed:
```javascript
request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const country = data[0]; // Access the first country object

    const html = `
        <div class="country-container">
            <img class="country-flag" src="${country.flag}" alt="">
            <h1 class="country-header">${country.name}</h1>
            <div class="description">
                <p class="country-population">Population: ${country.population}</p>
                <p class="country-currency">Currency: ${country.currencies[0].name}</p>
            </div>
        </div>`;

    const countryContainer = document.querySelector('.country-container');
    countryContainer.insertAdjacentHTML('beforeend', html);
});
```

### Dynamic DOM Manipulation
The parsed data is injected into a container in the HTML structure using `insertAdjacentHTML`.

## How to Run
1. Clone the repository or copy the code.
2. Make sure you have an internet connection to access the REST Countries API.
3. Open the `index.html` file in a browser.
4. The country information will be displayed dynamically.

## Example Output
When the page loads, the following information about Serbia will be displayed:
- The flag of Serbia.
- The name "Serbia."
- The population (in number format).
- The primary currency of the country.

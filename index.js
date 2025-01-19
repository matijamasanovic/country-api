const request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/name/serbia')
request.send()

request.addEventListener('load', function(){

const countryContainer = document.querySelector('.country-container')        
    
const data = JSON.parse(this.responseText)
console.log(data)

const country = data[0]

const html = `       <div class="country-container">
        <img class="country-flag" src="${country.flag}" alt="">
        <h1 class="country-header">${country.name}</h1>
        <div class="description">
            <p class="country-population">${country.population}</p>
            <p class="country-currency">${country.currencies[0].name}</p>
        </div>
    </div>`

    countryContainer.insertAdjacentHTML('beforeend', html)
})


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, searchCities) {
    return searchCities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function CreateFillerResponse() {
    const frag = document.createDocumentFragment();
    ['Filter for a city', 'or a state'].forEach(e => {
        const li = document.createElement('li');
        li.classList.add('suggestion');
        li.innerText = e;
        frag.appendChild(li);
    });

    return frag;
}

function CreateSuggestionResult(value, place) {
    const cityName = CreateHighlightSection(value, place.city);
    const stateName = CreateHighlightSection(value, place.state);

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('suggestion__name');
    nameSpan.appendChild(cityName);
    nameSpan.appendChild(document.createTextNode(', '));
    nameSpan.appendChild(stateName);

    const populationSpan = document.createElement('span');
    populationSpan.classList.add('suggestion__population');
    populationSpan.innerText = numberWithCommas(place.population);

    const li = document.createElement('li');
    li.appendChild(nameSpan);
    li.appendChild(populationSpan);
    li.classList.add('suggestion');

    return li;
}

function CreateHighlightSection(value, result) {
    const span = document.createElement('span');
    const regex = new RegExp(value, 'gi');
    span.classList.add('hl');
    span.innerText = result.replace(regex, value);
    return span;
}

function clearElement(elem) {
    while(elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    clearElement(suggestions);
    if(matchArray.length === 0) {
        // do nothing
    } else if(this.value.length === 0) {
        suggestions.appendChild(CreateFillerResponse());
    } else {
        matchArray.forEach(place => {
           suggestions.appendChild(CreateSuggestionResult(this.value, place))
        });
    }
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

suggestions.appendChild(CreateFillerResponse());

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

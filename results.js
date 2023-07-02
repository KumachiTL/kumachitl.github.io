// results.js

// Retrieve the search query from the URL parameter
const searchQuery = new URLSearchParams(window.location.search).get('q');

// Fetch the search results using the search query
fetch('data.json')
    .then(response => response.json())
    .then(data => displaySearchResults(data.results))
    .catch(error => console.log(error));

// Display the search results in the results container
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const searchTerm = searchQuery.toLowerCase();
        const filteredResults = results.filter(result => result.toLowerCase().includes(searchTerm));

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<p>No matching results found.</p>';
        } else {
            filteredResults.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.innerHTML = `
                    <h2>${result}</h2>
                    <hr>
                `;
                resultsContainer.appendChild(resultElement);
            });
        }
    }
}

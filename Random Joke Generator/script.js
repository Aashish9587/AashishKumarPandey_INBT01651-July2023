const jokeDisplay = document.getElementById('jokeDisplay');
const generateBtn = document.getElementById('generateBtn');
const categorySelect = document.getElementById('category');

const jokeAPI = {
  general: 'https://official-joke-api.appspot.com/jokes/general/random',
  programming: 'https://official-joke-api.appspot.com/jokes/programming/random',
  dadJokes: 'https://official-joke-api.appspot.com/jokes/dadJokes/random'
};

generateBtn.addEventListener('click', generateJoke);

function generateJoke() {
  const selectedCategory = categorySelect.value;
  const apiUrl = jokeAPI[selectedCategory];

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const joke = data[0];
      jokeDisplay.innerHTML = joke.setup + '<br>' + joke.punchline;
    })
    .catch(error => {
      jokeDisplay.innerHTML = 'An error occurred while fetching the joke.';
      console.error(error);
    });
}

const url = 'https://icanhazdadjoke.com/'

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
  fetchJoke()
})

const fetchJoke = async () => {
  result.textContent = 'Loading...'
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learnin app',
      },
    })
    console.log(response)
    const data = await response.json()
    result.textContent = data.joke
  } catch (error) {
    result.textContent = 'There was an error...'
  }
}

fetchJoke()

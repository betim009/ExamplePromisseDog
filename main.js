const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]');

// console.log(dogImg);    Confere no live serv o retorno do elemento.



const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.status);
  } catch (err) {
    console.log(err)
  }
};

getData();

const validate = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json();
}

const setDogImg = ({message: url}) => {
    dogImg.setAttribute('src', url)
}

const handleError = error => {
    console.log(error.message)
}

fetch(url)
    .then(validate)
    .then(setDogImg)
    .catch(handleError)


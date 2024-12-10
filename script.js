const showPromise = fetch("https://dog.ceo/api/breeds/image/random");
console.log(showPromise);

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const getPhoto = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
};
getPhoto();

const getPhotoOfCoffe = async () => {
  const response = await fetch("https://coffee.alexflipnote.dev/random.json");
  const data = await response.json();
  console.log(data);
};

let div = document.getElementById("div");

let button = document.createElement("button");
button.textContent = "Show photo";
let image = document.createElement("img");
div.appendChild(button);
div.appendChild(image);

button.addEventListener("click", (event) => {
  const getPhotoOfCoffe = async () => {
    const response = await fetch("https://coffee.alexflipnote.dev/random.json");
    const data = await response.json();
    image.src = data.file;
    image.style.height = "200px";
    image.style.width = "300px";
  };
  getPhotoOfCoffe();
});

let div2 = document.getElementById("div2");
let input = document.createElement("input");
let button2 = document.createElement("button");
let image2 = document.createElement("img");
let p = document.createElement("p");
let p2 = document.createElement("span");
let p3 = document.createElement("span");
button2.textContent = "Search";
div2.append(input, button2, image2, p, p3, p2);

button2.addEventListener("click", (event) => {
  const getCountrys = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${input.value}`
      );
      const data = await response.json();
      p2.textContent = "";
      image2.src = data[0].flags.png;
      image2.style.height = "200px";
      image2.style.width = "300px";
      p.textContent = `Pavadinimas: ${data[0].name.common}`;
      p3.textContent = `Sostine: `;
      for (let i in data[0].capital) {
        p2.textContent += ` ${data[0].capital[i]} `;
      }
    } catch (err) {
      alert("Nėra duomenų");
    }
    input.reset;
  };
  getCountrys();
});

const button = document.getElementById("fetchJoke");
const list = document.getElementById("jokeList");

button.addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();

    const li = document.createElement("li");
    li.textContent = data.value;

    list.appendChild(li);
  } catch (err) {
    console.error("Error al obtener el chiste:", err);
  }
});

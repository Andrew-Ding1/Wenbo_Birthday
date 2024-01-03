const heading = document.querySelector('h1');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}
let done = false;

const randomize = (e) => {
  console.log("randomize");
  if (done) return;
  done = true;

  let iterations = 0;

  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) return e.target.dataset.value[index];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations > e.target.dataset.value.length + 1) {
      clearInterval(interval);
      console.log("done");
      const picture = document.querySelector("img");
      picture.src = "https://picsum.photos/200";
    }

    iterations += 2 / 5;
  }, 50);


};

heading.addEventListener("mouseover", randomize);
console.log(heading)
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
      picture.src = "https://ci3.googleusercontent.com/mail-img-att/APrP3qHlQ3K4MApW2npckPfnZR8D72LpK8oYQyOFIRyjGB0OSDHmGJgYYLP17Xx1mA4axdu-xCVXav58_Fs1lGk4vZZ5AA7hYvjkhvo1qeZ-c7eFrDMdEUUS-65V1MWag2A9H2L-kLhO_8321N9Vg8FPLguJZ1UMC-30RBYsNl1jEf_LIVfz9VyA5U1G9FSNJ1mwfSumm8cyIRf49E-0_laozfwlRAABbxXQpquUmx8FM_woAXEGv51-vqTbZxX_Xumy_bF70Az8RkiQqI_o5gu_jZRDYvEm9jMD9TWTxGVxF3BRvfL8t7qwHoRIeku1GVSV5owzhe9bF1L0_RSlBtyHBNVDm3n4TWSY3nW6qRbWh9W-bR4mK8-LCfTVIuzwefHsYF_Rd4LCVCLkA01gyovhdRi0gBB2KYcAo62gnIraVnpziKKo7A1EKCf-PFrv5gPHmABxEnEDVilFlTfQq_vx68PUxt4ij8mgO3H6qxK_ba8yHq74JjA4ZOlsB3MT6aHSP4XCqPNJgdmwhvi9PaI5czjZP3o3xw83o5nJENL4yIDq-JkoWJctexn6QQaCS_yJng53CYNMRJ1bspeCpUokntqNTgn_xEYksIM2CK82LcPb1igQ6AZOtcqibSH36DT5aAV6KEfO7CRNVrhmzdy815gdIjCiDu5Pg-OYFl4njRNkS8fPDuPHRHQlyBM2e682_6KCUWfaIupxPeNP8o0paZTcioHkK28W7IyqQ_a7O2IQR84WO1bCUxX54o0LyvVo0S_ac6G3ZhgWay5Dt3fS6Q8wRA8A1FqOKcNv_ctAR0EthBSstpm5hWmYVIMaG-OTbfnXy6YCnJ6xS4qzHXo-CxBsxodoskba_EVxhW-qvYT37rvQKzB7Kw8LL-racV4GDQOUEwuFJUYt8hqydETAYLM63O7tK7X8udUVsTxbHRjHnvQpBUOo-ynQPBl4X12D7UDWNtsUb7U3ns7vuVydxMHwBLxHcX3Gg8x11Va8_8nrQaShaAGBtBB4C8ZzfD5x=s0-l75-ft";
    }

    iterations += 2.5 / 5;
  }, 50);


};

heading.addEventListener("mouseover", randomize);
console.log(heading)
/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
document.getElementById("btn").addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((user) => {
        document.getElementById(
          "output"
        ).innerHTML += `<div class='card'><h2>${user.login}</h2>
        <img src='${user.avatar_url}'>
        </div>`;
        document.getElementById("message").style.display = 'none';
      })
    );
});

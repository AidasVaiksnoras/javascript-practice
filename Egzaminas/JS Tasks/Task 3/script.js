/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.getElementById('btn').addEventListener('click',obtenirUsers);
function obtenirUsers(event){
    event.preventDefault();
    // console.log(event);
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => lirePersonne(data));
function lirePersonne(person)  {
   person.forEach((person) =>{
    document.getElementById("output").innerText = person.login;

    })
    }
}

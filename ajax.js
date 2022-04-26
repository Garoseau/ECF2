//! CALL HTML
function affichage(users) {
    let text = "";
    for (let i = 0; i < users.length; i++) {
        text += `
        // <div class = "container_wrapper">`;
    }
    document.querySelector('.box_trans').innerHTML = users;
}
function call() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/home.html", );
    xhr.send();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            const users = xhr.responseText;
            affichage(users);
        }
    }
}
document.querySelector('#navbar_one').onclick = function() {
    call()
}
function call_two() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/propos.html", );
    xhr.send();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            const users = xhr.responseText;
            affichage(users);
        }
    }
}
document.querySelector('#navbar_two').onclick = function() {
    call_two()
}
function call_three() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/contact.html", );
    xhr.send();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            const users = xhr.responseText;
            affichage(users);
        }
    }
}
document.querySelector('#navbar_three').onclick = function() {
    call_three()
}

//! ARTICLE
const xhr = new XMLHttpRequest();
xhr.open("GET", "/data.json", );
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const users = JSON.parse(xhr.responseText);
        affichage_two(users) 
        affichageTable(users);
    }
}
const affichage_two = function (article) {
    let text = "";
    for (let i = 0; i < article.length; i++) {
        text += `
        <div class="box">
        <h2>${article[i].titre}</h2>
        <p class="text">${article[i].auteur}, ${article[i].date}</p>
        <img class="pics" c src="${article[i].img}"/>
        </div>`;
    }
    document.querySelector('.box_trans').innerHTML = text;
}


//! lOGIN
let login = document.querySelector('#login');
let mdp = document.querySelector('#mdp');
let error = document.querySelector('#error');
let form = document.getElementsByTagName('form')[0]

let regLogin = /[a-z]{2,6}/;
let regPass = /([a-zA-Z0-9]){5}[*#/]{1}/;

form.onsubmit = function(e){
    e.preventDefault();
    if(!regLogin.test(login.value) || login.value.length > 6 || login.value !="admin"){
        error.innerHTML = '<p class="text">Login invalide</p>';
        return false;
    }else if(!regPass.test(mdp.value) ||mdp.value != "abCD1*"){
        error.innerHTML = '<p class="text">Mot de passe invalide</p>';
        console.log("mot de passe invalide");
        return false;
    }else{ 
        let secret = Math.random().toString(36).slice(-8);
        localStorage.setItem('token', secret);
        location.href = "admin2.html";
       
    }
}


if (!localStorage.getItem('token')) {
    location.href = 'index.html';
};

deco.onclick = () => {
    localStorage.removeItem('token');
    location.href = 'index.html';
}
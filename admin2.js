const xhrTwo = new XMLHttpRequest();


xhrTwo.open("GET", "/data.json");
xhrTwo.send();

xhrTwo.onreadystatechange = () => {
    console.log(xhrTwo.readyState);
    if (xhrTwo.readyState == 4 && xhrTwo.status == 200) {
        const users = JSON.parse(xhrTwo.responseText);
        affichageTable(users);
    }
}

const affichageTable = (donnees) => {
    let text = "";
    for (let i = 0; i < donnees.length; i++) {
        text += `
        <tr>
        <td>${donnees[i].titre}</td>
        <td>${donnees[i].auteur}</td>
        <td>${donnees[i].date}</td>
        <td><img width= 160 src="${donnees[i].img}"/></td>
        <td>
         <a href="" class=""><span class="material-icons">edit</span></a>
         <a href="" class=""><span class="material-icons">clear</span></a>
        </td>

        </tr>`;
    }
    document.querySelector('tbody').innerHTML = text;
}

if (!localStorage.getItem('token')) {
    location.href = 'index.html';
};

deco.onclick = () => {
    localStorage.removeItem('token');
    location.href = 'index.html';
}
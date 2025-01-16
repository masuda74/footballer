
async function main() {
    const boxContainer = document.getElementById("box-container");
    const spinner = document.getElementById("loading-spinner");

    try {
        spinner.style.display = "block";
        const res = await fetch("https://www.rakibulhasanrakib.com/api/players");
        const players = await res.json();


        players.forEach((player) => {
            const box = document.createElement("div");
            box.style.border = "2px solid green";
            box.style.padding = "10px";
            box.style.borderRadius = "8px";
            box.style.background = "yellow";

            box.innerHTML = `
        <h1 class="name">${player.name} <i class="fa fa-cart-plus" aria-hidden="true"></i></h1> 
        <h4>"age": ${player.age} </h4> 
        <h3>"club": ${player.club} </h3> 
        <p>"nationality":${player.nationality}</p> 
        <img src="${player.photo}" width="500" height="300" alt="${player.name}"> 
        `;

            boxContainer.append(box);
        });
    } catch (error) {
        const errorElement = document.createElement("h3");
        errorElement.style.color = "red";
        errorElement.style.fontSize = "100px";
        errorElement.style.textAlign = "center";
        errorElement.innerHTML = "404";
        boxContainer.append(errorElement);
    } finally {
        spinner.style.display = "none";
    }

}

main();
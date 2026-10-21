// function checkArmstrong(num) {
// let sum=0;
// let x=num;
// let digits=num.toString().length;
// while(x!=0){
//     let p=1;
//     let tem=x%10;
//     for(let i=0;i<digits;i++){
//         p*=tem;
//     }
//     sum+=p;
//     x=Math.floor(x/10);
// }
// if(sum==num){
//     document.getElementById("result").innerHTML = num + " is an Armstrong number";
// }
// else{
//     document.getElementById("result").innerHTML = num + " is not an Armstrong number";
// }
// }




let movies = [];

function display() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        list.innerHTML += `<li>
            ${movies[i].name} - ${movies[i].rating}
            <button onclick="update(${i})">Update</button>
            <button onclick="del(${i})">Delete</button>
        </li>`;
    }
}

function add() {
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;

    movies.push({ name: name, rating: rating });
    display();
}


function update(i) {
    let name = prompt("Enter new name");
    let rating = prompt("Enter new rating");

    movies[i].name = name;
    movies[i].rating = rating;

    display();
}


function del(i) {
    movies.splice(i, 1);
    display();
}

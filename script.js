let arr=[];
let id=0;
let addButton=document.getElementsByClassName("addUser")[0];
let viewContainer=document.getElementsByClassName("viewContainer")[0];
let sucessContainer=document.getElementsByClassName("SucessMessage")[0];
let errorContainer=document.getElementsByClassName("ErrorMessage")[0];
// console.log(addButton,viewContainer,sucessContainer,errorContainer);

function zero(){
    if(arr.length===0){
        viewContainer.innerHTML="";
        let message=document.createElement("p");
        message.className='default';
        message.innerText='YOU HAVE 0 EMPLOYEE';
        viewContainer.append(message);
    }
}
zero();

addButton.addEventListener('click', addUser);
function addUser() {
    let name = document.getElementById("Name").value;
    let profession = document.getElementById("Profession").value;
    let age = document.getElementById("Age").value;
    // console.log(name, profession, age);

    if (!name || !profession || !age) {
        let error = document.createElement("p");
        error.className = 'ErrorMessage';
        error.innerText = 'Error: Please fill all the fields';
        errorContainer.innerHTML = "";
        sucessContainer.innerHTML = "";
        errorContainer.append(error);
        setTimeout(()=>{
            error.remove();
        },3000)
        return;
    }
    let sucess = document.createElement("p");
    sucess.className = 'SucessMessage';
    sucess.innerText = 'Sucess: congo Employee added';
    errorContainer.innerHTML = "";
    sucessContainer.innerHTML = "";
    sucessContainer.append(sucess);
    setTimeout(()=>{
        sucess.remove();
    },3000)

    id=id+1;
    let info=document.createElement('div')
    info.className='info'
    info.innerHTML=`<div class="id">${id}.</div>
    <div class="Name">Name:${name}</div>
    <div class="Profession">Profession:${profession}</div>
    <div class="Age">Age:${age}</div>
    `
    arr.push(info);
    show();
    zero();
    console.log(arr);

}

function show() {
    viewContainer.innerHTML = "";

    arr.forEach(element => {
        let viewflex = document.createElement('div');
        viewflex.className = "viewFlex";
        viewflex.append(element);
        // viewflex.innerHTML = element.outerHTML; // Append the HTML content of the info element
        let DeleteContainer = document.createElement("div");
        let DeleteButton = document.createElement('button');
        DeleteButton.className = "deleteButton";
        DeleteButton.innerText = 'Delete User';

        DeleteButton.addEventListener('click', () => {
            arr = arr.filter(item => {
                return item !== element;
            });
            show();
            zero();
        });
        DeleteContainer.append(DeleteButton);
        viewflex.append(DeleteContainer);
        viewContainer.append(viewflex);
    });
    let count=document.createElement('p');
    count.innerText=`Total number of user ${arr.length}`;
    viewContainer.append(count);
}

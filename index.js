let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
        box.innerText = "O";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    count++;

    let winner = checkwinner();

    if(count === 9 && !winner){
        msg.innerText = "Game Draw."
        msgcont.classList.remove("hide");
        disableboxes();
    }
})
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const newgame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msgcont.classList.add("hide");
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwinner = () => {
    for(let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3) {
            msg.innerText = `Winner is ${pos1}`;
            msgcont.classList.remove("hide");
            disableboxes();
          }

    }
};

btn.addEventListener("click",newgame);

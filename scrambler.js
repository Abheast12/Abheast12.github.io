const back = ["B", "B2", "B'"];
const front = ["F", "F2", "F'"];
const left = ["L", "L2", "L'"];
const right = ["R", "R2", "R'"];
const up = ["U", "U2", "U'"];
const down = ["D", "D2", "D'"];
const all = back.concat(front, left, right, up, down);
let scramble = "";
let random = all[Math.floor(Math.random() * all.length)];
scramble +=random;
let prev = random;
for(let i=0; i<20; i++){
    while(true){
        random = all[Math.floor(Math.random() * all.length)];
        if(back.includes(prev) && !front.includes(random) && !back.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
        else if(front.includes(prev) && !front.includes(random) && !back.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
        else if(right.includes(prev) && !right.includes(random) && !left.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
        else if(left.includes(prev) && !right.includes(random) && !left.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
        else if(up.includes(prev) && !down.includes(random) && !up.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
        else if(down.includes(prev) && !down.includes(random) && !up.includes(random)){
            prev = random;
            scramble = scramble + " " + random;
            break;
        }
    }
}
console.log(scramble);
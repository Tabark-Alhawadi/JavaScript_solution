

function calculateSupply(age,amount){
let y,t,d;
d=100-age;
y=d*365;
t=y*amount;
    console.log(`You will need ${t} cups of tea to last you until the ripe old age of 100`);
}

calculateSupply(20,2);
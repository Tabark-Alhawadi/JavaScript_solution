function canIGetADrivingLicense(age){
    let x=20-age;
    if(age>=20){
    console.log(`Yes you can`);
    }
    else{
    console.log(`please come back after ${x} years to get one`)
    }
}

canIGetADrivingLicense(21);
canIGetADrivingLicense(6);
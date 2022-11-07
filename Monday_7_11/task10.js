function sameLength( word1,word2){
    length1=word1.length;
    length2=word2.length;
    if(length1==length2){
        console.log(`true`);
    }
    else{
        console.log(`false`);
    }
}

sameLength("tree","clue");
sameLength("tree","car");
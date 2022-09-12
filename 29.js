

function highestScore(score){
    let max = score[0];
    for(var x=1; x<score.length; x++){
        if(max<score[x]){
            max = score[x];
        }

    }

    return max;
}

let score =[81,78,1,34,2,38];
var matchScore = highestScore(score);
console.log(matchScore);
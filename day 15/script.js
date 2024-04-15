
function a (arrayA,arrayB){
    let commomNumbers = [];

    for( let i = 0; i < arrayA.length; i++ ){
        if ( arrayB.includes( arrayA[i] )) {
            commomNumbers.push( arrayA[i] )

        }else if( arrayB.includes( arrayA[i]) ){
            commomNumbers.filter( arrayB)
        }
    }   
    return commomNumbers.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

let arrayA = [13,20,10,22,24,20,27,17,19,14,17,14]; 
let arrayB = [24,22,23,11,15,17,29,14,16,21,17,14];

let result = a (arrayA,arrayB);





var enteredArrray = ["7000", "7001", "7002", "7003", "7004", "7005"];
var inputText = ["7000", "6098-7003"];
var uniqueArray = [];
var duplicateArray = [];

function checkDuplicate() {
    inputText.forEach(elem => {
        if (elem.split("-").length > 1) {
            checkRange(elem);
        } else {
            if (enteredArrray.indexOf(elem) === 0 && duplicateArray.indexOf(elem) === -1) {
                duplicateArray.push(elem);
            }
        }

    })
	enteredArrray.forEach(elem=>{
		if(duplicateArray.indexOf(elem)===-1){
			uniqueArray.push(elem);
		}
	})

	return ({duplicateArray , uniqueArray});
}

function checkRange(range) {
    var rangeArray = range.split("-")
    for (var i = rangeArray[0]; i <= rangeArray[1]; i++) {
		enteredArrray.forEach(elem=>{
			if(elem == i && duplicateArray.indexOf(`${i}`) === -1){
					duplicateArray.push(`${i}`)
			}
		})
		
	}
		
}

console.log(checkDuplicate());

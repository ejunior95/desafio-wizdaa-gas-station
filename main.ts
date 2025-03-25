(() => {
    // const impossibleStrArr = ["4","0:1","2:2","1:2","3:1"];
    // const possibleStrArr = ["4","0:1","2:2","1:2","3:1"];
    const possibleStrArr = ["4","3:1","2:2","1:2","0:1"];
    const gasStationIndexRoutePossible = [];

    for (let i = 1; i <= 4; i++) {
        if (i === 1) {
            const splittedStrItem1 = possibleStrArr[1].split(':');
            const splittedStrItem2 = possibleStrArr[2].split(':');
            const splittedStrItem3 = possibleStrArr[3].split(':');
            const splittedStrItem4 = possibleStrArr[4].split(':');
            let diffGalonsTotal = 0
            const diffGalonsItem1 = Number(splittedStrItem1[0]) - Number(splittedStrItem1[1])
            diffGalonsTotal += diffGalonsItem1
            const diffGalonsItem2 = Number(splittedStrItem2[0]) - Number(splittedStrItem2[1])
            diffGalonsTotal += diffGalonsItem2
            const diffGalonsItem3 = Number(splittedStrItem3[0]) - Number(splittedStrItem3[1])
            diffGalonsTotal += diffGalonsItem3
            const diffGalonsItem4 = Number(splittedStrItem4[0]) - Number(splittedStrItem4[1])
            diffGalonsTotal += diffGalonsItem4

            if (diffGalonsTotal >= 0 &&
                diffGalonsItem1 >= 0 && 
                diffGalonsItem2 >= 0 && 
                diffGalonsItem3 >= 0 && 
                diffGalonsItem4 >= 0 
            ) {
                gasStationIndexRoutePossible.push(i);
            }
        };
        if (i === 2) {
            const splittedStrItem2 = possibleStrArr[2].split(':');
            const splittedStrItem3 = possibleStrArr[3].split(':');
            const splittedStrItem4 = possibleStrArr[4].split(':');
            const splittedStrItem1 = possibleStrArr[1].split(':');
            let diffGalonsTotal = 0
            const diffGalonsItem2 = Number(splittedStrItem2[0]) - Number(splittedStrItem2[1])
            diffGalonsTotal += diffGalonsItem2
            const diffGalonsItem3 = Number(splittedStrItem3[0]) - Number(splittedStrItem3[1])
            diffGalonsTotal += diffGalonsItem3
            const diffGalonsItem4 = Number(splittedStrItem4[0]) - Number(splittedStrItem4[1])
            diffGalonsTotal += diffGalonsItem4
            const diffGalonsItem1 = Number(splittedStrItem1[0]) - Number(splittedStrItem1[1])
            diffGalonsTotal += diffGalonsItem1
            
            if (diffGalonsTotal >= 0 &&
                diffGalonsItem2 >= 0 && 
                diffGalonsItem3 >= 0 && 
                diffGalonsItem4 >= 0 && 
                diffGalonsItem1 >= 0 
            ) {
                gasStationIndexRoutePossible.push(i);
            }
        };
        if (i === 3) {
            const splittedStrItem3 = possibleStrArr[3].split(':');
            const splittedStrItem4 = possibleStrArr[4].split(':');
            const splittedStrItem1 = possibleStrArr[1].split(':');
            const splittedStrItem2 = possibleStrArr[2].split(':');
            let diffGalonsTotal = 0
            const diffGalonsItem3 = Number(splittedStrItem3[0]) - Number(splittedStrItem3[1])
            diffGalonsTotal += diffGalonsItem3 
            const diffGalonsItem4 = Number(splittedStrItem4[0]) - Number(splittedStrItem4[1])
            diffGalonsTotal += diffGalonsItem4 
            const diffGalonsItem1 = Number(splittedStrItem1[0]) - Number(splittedStrItem1[1])
            diffGalonsTotal += diffGalonsItem1 
            const diffGalonsItem2 = Number(splittedStrItem2[0]) - Number(splittedStrItem2[1])
            diffGalonsTotal += diffGalonsItem2 
            
            if (diffGalonsTotal >= 0 &&
                diffGalonsItem3 >= 0 && 
                diffGalonsItem4 >= 0 && 
                diffGalonsItem1 >= 0 && 
                diffGalonsItem2 >= 0 
            ) {
                gasStationIndexRoutePossible.push(i);
            }
        };
        if (i === 4) {
            const splittedStrItem4 = possibleStrArr[4].split(':');
            const splittedStrItem1 = possibleStrArr[1].split(':');
            const splittedStrItem2 = possibleStrArr[2].split(':');
            const splittedStrItem3 = possibleStrArr[3].split(':');
            let diffGalonsTotal = 0
            const diffGalonsItem4 = Number(splittedStrItem4[0]) - Number(splittedStrItem4[1])
            diffGalonsTotal += diffGalonsItem4
            const diffGalonsItem1 = Number(splittedStrItem1[0]) - Number(splittedStrItem1[1])
            diffGalonsTotal += diffGalonsItem1
            const diffGalonsItem2 = Number(splittedStrItem2[0]) - Number(splittedStrItem2[1])
            diffGalonsTotal += diffGalonsItem2
            const diffGalonsItem3 = Number(splittedStrItem3[0]) - Number(splittedStrItem3[1])
            diffGalonsTotal += diffGalonsItem3
            
            if (diffGalonsTotal >= 0 &&
                diffGalonsItem4 >= 0 && 
                diffGalonsItem1 >= 0 && 
                diffGalonsItem2 >= 0 && 
                diffGalonsItem3 >= 0 
            ) {
                gasStationIndexRoutePossible.push(i);
            }
        };
    };
    
    gasStationIndexRoutePossible.length ? 
    console.log('Output: ', gasStationIndexRoutePossible) : 
    console.log('Impossible');

})();
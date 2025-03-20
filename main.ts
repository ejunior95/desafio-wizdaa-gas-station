(() => {
    // const possibleStrArr = ["4","3:1","2:2","1:2","0:1"];
    const impossibleStrArr = ["4","0:1","2:2","1:2","3:1"];
    const gasStationIndexRoutePossible = [];
    for (let i = 1; i < 2; i++) {
        let gainGalons = 0;
        let lostGalons = 0;
        impossibleStrArr.forEach((item, index) => {
            if (index > 0) {
                const splittedStr = item.split(':');
                gainGalons += Number(splittedStr[0]);
                lostGalons += Number(splittedStr[1]);
            };
        });
        if (gainGalons - lostGalons >= 0) gasStationIndexRoutePossible.push(i);
    };
    
    gasStationIndexRoutePossible.length ? 
    console.log('Output: ', gasStationIndexRoutePossible[0]) : 
    console.log('Impossible');

})();
(() => {
    const strArr = ["4","3:1","2:2","1:2","0:1"];
    let initialGalons = 0;
    strArr.forEach((item, index) => {
        if(index > 0) {
            const slipttedItens = item.split(':')
            console.log('Partial slipttedItens: ', slipttedItens);
            initialGalons += Number(slipttedItens[0]);
            initialGalons -= Number(slipttedItens[1]);
        }
        console.log('Partial results: ', initialGalons);
    })
    console.log('Result: ', initialGalons);
})();
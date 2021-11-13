function howMuchILoveYou(nbPetals) {
    // your code
    const arr = ['I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all']

        while(nbPetals>6){
            nbPetals = Math.abs(nbPetals-6)
        }
    return arr[nbPetals-1]
}


console.log(howMuchILoveYou(3))
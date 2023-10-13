let student={
        prenom:"Gabin",
        FavFood:"frites",
        City:"paris",
    }
    let values=Object.values(presonne);
    let count=values.reduce((acc,value)=>acc+value.length,0)
    console.log(count);
for (let index = 0; index < 100; index++) {
    if (index%5 === 0 && index%3 === 0){
        console.log('fizz2')
    }
    else if (index%3 == 0){
        console.log('bazz')
    }else if(index%5 === 0){
        console.log('fizz')
    }else{
        console.log(index)
    }
}

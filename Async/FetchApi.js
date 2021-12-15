// FEtch Api

fetch('Get.json').then((response) => {
    console.log('resolved', response);
    return response.json(); // Here we can't change into json.parse coz of promise
}).then(data => {   // promise chaining
    console.log(data); // we can access json file
}).catch(err => {
    console.log('rejected', err)  // According to xmlhttprequest it is much more better and less code required & efficient..
})

// Async - Await

const git = async () => {
    const repo = await fetch('Get.json');

    if(repo.status !== 200){
        throw new Error('cannot fetch the data') // throwing an error 
    }

    const data = await repo.json();

    return data;
}

console.log(1);
console.log(2);
git()
.then(data => console.log('received :', data))
.catch(err => console.log('fault :', err))  // Catching error
console.log(3);
console.log(4);
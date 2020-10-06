let money = 1000;

const byCake = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (money > 1000) {
            resolve('you have cake');
        } else {
            reject('not enough money');
        }
    }, 1000);
})

const promiseSuccess = byCake
.then(result => {
    console.log(result);
})
.catch(result => {
    console.log(result);
})
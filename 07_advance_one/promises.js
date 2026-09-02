// const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log('Async function execute');  
//         resolve()      
//     }, 1000)
// })

const { response } = require("express");

// promiseOne.
// then(function(){
//     console.log("then executed");    
// })

// new Promise(function(resolve, reject){
//     console.log("Second short way");
//     resolve()
// }, 1000).then(function(){
//     console.log('then executed');    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Tejas", age : 25})        
//     }, 1000)
// })

// promiseThree.then(function(data){
//     console.log(data);
    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let err = false
//         if(!err){
//             resolve({username: 'Tejas', age: 25})
//         }else{
//             reject("Error occured")
//         }
//     },1000)
// })

// promiseFour
// .then((user)=> {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((err) => { console.log(err)}
// )
// .finally(() => { console.log('Finally Executed');
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let err = true
//         if(!err){
//             resolve({username: 'Tejas', age: 25})
//         }else{
//             reject("Error occured")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);   
//     }    
// }

// consumePromiseFive()

// async function getAllUser() {
//     try {
//         const api =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await api.json()
//         console.log(data);
//     } catch (error) {
//         console.log("FAlied");
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data);    
})
.catch((error)=> {
    console.log('Error');
    
})
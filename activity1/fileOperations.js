const fs = require('fs')
// Activity 1 - Basic File Operations with Node.js (Using the fs module)
/*
fs.writeFile('UserData.txt', 'Hello, this is a test message!', (err)=>{
    if (err){
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});

fs.readFile('userData.txt', 'utf-8', (err, data)=> {
    if (err){
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});
*/

// Activity 1b – Refactor File Operations Using Promises

function writeFilePromise(filename, data) { 
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            const message = "Success!"
            if (err) {
                reject(err);
            } else {
                resolve(message); 
            }
        });
    });
}
writeFilePromise('UserData.txt', 'Hello, this is a test message!')
.then((message)=> {
    console.log(message)
})
.catch((err)=>{
    console.error('Error reading file:', err);
});

const readFilePromise = (path) => new Promise((resolve, reject) =>{
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

readFilePromise('UserData.txt')
.then((data) => console.log('Data:', data))
.catch((err) => console.error('Error reading file:', err));


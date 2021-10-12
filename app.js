// imports page-template.js 
const generatePage = require('./src/page-template.js');

// allows use of the fs module
const fs = require('fs');

// accepts user input in the command line
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// end block 

fs.writeFile('index.html', generatePage(name, github), err => {
    if(err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
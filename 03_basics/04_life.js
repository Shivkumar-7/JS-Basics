//Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB connected`);
})();

// () in last for execution and in between () so to run without polluted from global scope variables we use iife method and use ; for termination

// arrow function
( (name) => {
    //unname iife
    console.log(`DB connected 2 ${name} `);
} )("shiv");




// / defind a function

const sayhello =()=>{
    console.log("hello world");

    
}
    // calling functin
    sayhello();
    
    function greet (name){
        console.log("john");
        
    }
    // greet();
    const hof=(calback)=>{
        const userName=prompt("pleass inter your name")
        calback(userName)
    }
    hof(greet)
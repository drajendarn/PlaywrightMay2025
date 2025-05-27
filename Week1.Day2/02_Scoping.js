var genderType='Female'; //Global declaration

function printGender()
{

    let color='pink'; //function scope

    if(genderType.startsWith('Female'))
    {
        var age=20;
        let color='brown'; //block scope
        console.log("color is : "+color);
        console.log("age is : "+age);
        
    }
    else
    {
        var age=40;
        console.log("color is : "+color);
        console.log("age is : "+age);

    }
   console.log(age); //var declared within block scope sytill accessible outside the block
    
}


printGender(); //Calling the function
console.log(genderType); // global variable access outside


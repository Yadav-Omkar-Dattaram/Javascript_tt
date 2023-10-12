/* mainly variavbles are declare using 3 keywords let var and const
const - is used to declare constant variables and hence they are immutable;
we can also declare variables without using these reserved keywords
*/
{
    const deptId = 1
    let deptName = "IT" // muttable
    var deptMail = "@domain.IT" //muttable
    myName = "omkar"  //mutable
    let actyoe; //if you decalre a variable without initialising it then it would outpot undefined
    
    console.log(actyoe) // used to log or display insde console or terminal
    console.table([deptId, deptMail, deptName, myName]) // another method of loging displays o/p in tabular format
}

//mutability is not the only difference while declaring these variables using keywords another factore is the scope
// the problem with var is it dosen't used to under stand the scope of varibale 

 {
    var testScope = 69
    console.log(testScope) //69
    { //-- scope
            var testScope = 96 // the varible declare using var may sometimes change the similar named variable outside its scope
    }
    console.log(testScope);  //96
 }
   
 // the above example explains the scope variables declare using var can be accessed or changed outside its scope

 {
    let tscope = 69
    console.log(tscope); // 69
    {
       let tscope = 96 // varibale declared using let will not change similar named variables outside its scope
    }
    console.log(tscope); // 69
 }

 // so let is the preferred way of declaring variables because var may generate unneccessary changes 
 // in block and functional scope


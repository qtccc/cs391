function checkAge(){
    console.log("I got this");
    let age = document.getElementByld("input").value;
    age = Number(age);
    let output=document.getElementById("alt-output");
    let ans;

    if (isNaN(age)){     //test if the input is a number 
        output.style.display = "block";
        ans= "Failed to enter a number";
        console.log("2");
    }
    else if (age < 0){     //test if the input is negative
        output.style.display = "block";
        ans= "Negative number is not acceptable";
    }
    else if(age%1 !== 0){    //test if the input is decimal
        output.style.display = "block";
        ans= "Age must be a whole number";
    }
    else if (age >= 18 && age <= 120){      //acceptable age range --> display the site
        document.getElementById("main-output").style.display = "block";
        document.getElementById("alt-output").style.display = "none";
    }
    else {
        output.style.display = "block";
        ans= "you are not allowed";
    }

    output.innerHTML=`<p>${ans}</p>`;
}
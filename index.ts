#! /usr/bin/env node

import inquirer from "inquirer";



const Mypin = 4455;
let Mybalance = 12500; 

// Pin Code

let pinEntered = await inquirer.prompt(
    [
        {
            name: "Pin",
            message: "Enter Your Pin Number",
            type: "number"
        
        }
    ]
); if(pinEntered.pin === Mypin){
    console.log ("Correct Pin code")

} else  {
    console.log("Incorrect Pin Code")
}
    


// Account Type and Transaction 

let accountType = await inquirer.prompt(
    [
        {
            name: "accountType",
            message: "Select Option Please!",
            type: "list",
            choices: [
                "Cash Withdrawl ",
            
            ]

        }, 
        
        {
           name: "transMethod",
           message: "Select Your Transaction Method",
           type: "list",
           choices: [
              "Cash Withdraw",
              "Easy Paisa",
           ]
        }
    ]

);

if(accountType.transMethod == "Cash Withdraw"){
     let amountAns = await inquirer.prompt (
        [
            {
                name: "amount",
                message:"enter your Amount",
                type: "number"
            }
        ]
     );

     if (Mybalance >= amountAns.amount){
        Mybalance -= amountAns.amount;
        console.log ("Your Current Amount Is: " + Mybalance)
     } else{
        console.log("You don't have enough amount to withdraw")
     }

    
    }

    
   if (accountType.transMethod == "Easy Paisa"){
    let paisaAmount = await inquirer.prompt(
        [
            {
                name: "EasyPaisaAmount",
                message: "Select Your Amount",
                type: "list",
                choices: [
                    "500",
                    "1000",
                     "5000"
                ]

            }
        ]
    ); if(Mybalance >= paisaAmount.EasyPaisaAmount){
        Mybalance -= paisaAmount.EasyPaisaAmount;
        console.log ("Your Current Amount Is: " + Mybalance)
    }else{
        console.log("You don't have enough amount to withdraw")
    }
   } 

  

  



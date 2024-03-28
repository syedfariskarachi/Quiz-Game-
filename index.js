#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome in Quiz Game");
let ask = await inquirer.prompt({
    message: "Would You Like To Play Quiz Game With Me:",
    name: "ask1",
    type: "list",
    choices: ["YES", "NO"],
});
if (ask.ask1 === "YES") {
    let question1 = await inquirer.prompt({
        message: "Which of the following is true about a singular matrix?",
        type: "list",
        name: "mcq1",
        choices: [
            "A)It has a determinant of zero",
            "B)It has a determinant of one",
            "C)It has all elements as one",
        ],
    });
    if (question1.mcq1 === "A)It has a determinant of zero") {
        let question2 = await inquirer.prompt({
            message: "What is the result of multiplying a matrix by its inverse?",
            type: "list",
            name: "mcq2",
            choices: [
                "A) The original matrix",
                "B) A matrix with all elements as zeros",
                "C)The identity matrix",
            ],
        });
        if (question2.mcq2 === "C)The identity matrix") {
            let question3 = await inquirer.prompt({
                message: "Which property holds true for matrix addition?",
                name: "mcq3",
                type: "list",
                choices: [
                    "A) Associative",
                    "B) Distributive",
                    "C) Commutative",
                    "D) None of the above",
                ],
            });
            if (question3.mcq3 === "B) Distributive") {
                let question4 = await inquirer.prompt({
                    message: "Which operation is used to find the transpose of a matrix?",
                    name: "mcq4",
                    type: "list",
                    choices: [
                        "A) Addition",
                        "B) Subtraction",
                        "C) Multiplication ",
                        "D) Transposition",
                    ],
                });
                if (question4.mcq4 === "D) Transposition") {
                    let question5 = await inquirer.prompt({
                        message: "What is the result of multiplying a matrix by its identity matrix?",
                        name: "mcq5",
                        type: "list",
                        choices: [
                            "A) The original matrix",
                            "B) An empty matrix",
                            "C) Subtraction",
                            "D) A matrix with all elements as ones",
                        ],
                    });
                    if (question5.mcq5 === "A) The original matrix") {
                        console.log("Congrats You Win");
                    }
                    else {
                        console.log("Wrong Answer Better Luck Next Time");
                    }
                }
                else {
                    console.log("Wrong Answer Better Luck Next Time");
                }
            }
            else {
                console.log("Wrong Answer Better Luck Next Time");
            }
        }
        else {
            console.log("Wrong Answer Better Luck Next Time");
        }
    }
    else {
        console.log("Wrong Answer Better Luck Next Time");
    }
}
else {
    console.log("OK BY");
}

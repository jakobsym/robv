import figlet from "figlet";
import inquirer from "inquirer";
import { program } from "commander";

export const showGreeting = () => {
    return new Promise((resolve, reject) => {
      figlet.text(
        "RoBv",
        {
          font: "Doom", // Ghost
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 160,
          whitespaceBreak: true,
        },
        function (err, data) {
          if (err) {
            reject("Something went wrong...");
            console.dir(err);
          } else {
            console.log(data);
            resolve();
          }
        }
      );
    });
};

// gets token address from CLI args
// returns: String
export const tokenAddressFromArgs = () => {
  var tokenAddress
  program.action(() => {
      inquirer
        .prompt([
          {
            type: "input",
            name: "tokenAddress",
            message: "Enter CA:",
          },
        ])
        .then((answers) => {
          tokenAddress = answers.tokenAddress;
        });
    });
  program.parse();
  return tokenAddress;
}
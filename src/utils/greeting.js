import figlet from "figlet";

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

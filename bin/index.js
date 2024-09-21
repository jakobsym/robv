import figlet from "figlet";

// Greeting message when loads
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
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
);
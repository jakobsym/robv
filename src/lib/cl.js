import { program } from "commander";
import { showGreeting } from "../utils/greeting.js";

export const runCLI = async() =>  {
    try {
        await showGreeting()

     // cli logic
    program
    .version("0.0.0")
    .description("Raydium Orderbook Viewer")
    .option("-n, --name <type>", "Add your name")
    .action((options) => {
        console.log(`Hey, ${options.name}!`);
    });
    program.parse(process.argv);
        
    } catch (error) {
        console.error(error)
    }
}
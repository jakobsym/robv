import { showGreeting, tokenAddressFromArgs } from "../utils/greeting.js";

export const runCLI = async() =>  {
    try {
        await showGreeting()
        let tokenAddress = tokenAddressFromArgs();
    } catch (error) {
        console.error(error)
    }
}

// uses project-serum DEX to fetch orderbook data (bids/asks + size)
// TODO: How will end user see data so its meaningful?
const getOrderBookData = async(tokenAddress) => {
    
}
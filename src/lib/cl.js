import { PublicKey } from "@solana/web3.js";
import { showGreeting  } from "../utils/greeting.js";
import { baseMintAddressFromArgs, quoteMintFromArgs } from "../utils/helper.js"
import { getOrderBookData, getOrderBookMarketAddress } from "./serum_scripts.js";

export const runCLI = async() =>  {
    var pairMap = {}
    var baseMintID, quoteMintID
    try {
        await showGreeting()
        quoteMintID = await quoteMintFromArgs()
        baseMintID = await baseMintAddressFromArgs()
        let obMarketAddress = await getOrderBookMarketAddress(baseMintID, quoteMintID)
        console.log(obMarketAddress)
        //let obData = await getOrderBookData(obMarketAddress)
    } catch (error) {
        console.error(error)
    }
}

// returns pair as PublicKeys in a hashmap for quick lookup
const fetchPairAddress = async() => {
    var baseMintAddress, quoteMintAddress
    try {
        quoteMintAddress = await quoteMintFromArgs()
        baseMintAddress = await baseMintAddressFromArgs()
    } catch (error) {
        console.error("error fething pair from CLI ", error)
    }

    if (quoteMintAddress || baseMintAddress === undefined) {
        console.error("error fetching addresses from CLI")
    }
    return {
        BaseMintAddress: new PublicKey(baseMintAddress),
        QuoteMintAddress: new PublicKey(quoteMintAddress),
    }
}
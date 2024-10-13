import { error } from "console";
import { showGreeting  } from "../utils/greeting.js";
import { baseMintAddressFromArgs, quoteMintFromArgs } from "../utils/helper.js"
import { getOrderBookData, getOrderBookMarketAddress } from "./serum_scripts.js";

export const runCLI = async() =>  {
    var pairMap = {}
    try {
        await showGreeting()
        pairMap = await fetchPairAddress()
        //let obMarketAddress = await getOrderBookMarketAddress(pairMap['baseMintAddress'], pairMap['quoteMintAddress'])
        //let obData = await getOrderBookData(obMarketAddress)
    } catch (error) {
        console.error(error)
    }
}

// returns pair as hashmap for quick lookup
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
        BaseMintAddress: baseMintAddress,
        QuoteMintAddress: quoteMintAddress,
    }
}
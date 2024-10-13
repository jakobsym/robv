import { Connection, PublicKey } from '@solana/web3.js'
import { Market } from '@project-serum/serum'
// uses project-serum DEX to fetch orderbook data (bids/asks + size)
// TODO: How will end user see data so its meaningful?

// serum programID: 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin
export const getOrderBookData = async(marketAddress) => {

}

export const getOrderBookMarketAddress = async(baseMintAddress, quoteMintAddress) => {
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
    
    const SERUM_PROGRAM_ID = new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin');
    const BASE_ID = new PublicKey(baseMintAddress)
    const QUOTE_ID = new PublicKey(quoteMintAddress)

    const markets = await Market.findAccountsByMints(
        connection,
        BASE_ID,
        QUOTE_ID,
        SERUM_PROGRAM_ID
    );

    if (markets.length === 0) {
        console.log('No market found for the given token pair');
        return null;
    }

    console.log(`Found ${markets.length} market(s):`);
    markets.forEach((market, index) => {
        console.log(`${index + 1}. Market address: ${market.publicKey.toBase58()}`);
    });

    return markets[0].publicKey;
}

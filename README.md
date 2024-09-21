Set Up a Solana Development Environment:

Install the Solana CLI and configure your environment to connect to the Solana blockchain.
You can use the official Solana development tools, such as solana-cli, @solana/web3.js (JavaScript library for interacting with Solana), or RPC services like QuickNode or Alchemy.
Understand the DEX Protocols on Solana:

Identify the DEX protocols on Solana that you are interested in (e.g., Serum, Raydium).
Study how these DEXes manage their order books. For example, Serum uses on-chain programs to maintain a fully decentralized order book. Each order is recorded on-chain, and the data is publicly accessible.
Interact with the Solana Blockchain:

Use @solana/web3.js to connect to the Solana RPC nodes.
Query for on-chain data using relevant methods to fetch the account data for order books. For example, in Serum, each market has an associated "market" account, and order book data is stored in the "bids" and "asks" accounts.
Fetch Order Book Data:

Write a script to fetch order book data for specific markets. You will need the public keys of the market, bid, and ask accounts.
Use the Solana JSON RPC API methods like getAccountInfo or getProgramAccounts to retrieve raw data about the orders.
If you're targeting a specific DEX like Serum, there are libraries like @project-serum/serum that provide helper methods to interact with Serum markets more easily.
Parse and Aggregate the Data:

Decode the binary data returned from Solana RPC calls into readable order book data. You may need to use specific data parsers depending on the DEX.
Aggregate and format the data into a more user-friendly format (e.g., JSON) for further processing or visualization.
Build a User Interface (Optional):

Create a web or desktop interface to display the order book data.
Use frameworks like React to create a frontend that dynamically fetches and displays the order data.
Consider Data Refresh and Caching:

Implement a strategy to refresh the data periodically (e.g., using WebSockets for real-time updates or polling every few seconds).
Cache frequently accessed data to reduce load on RPC nodes and improve performance.



Flow:
user enters a token address
    - backend will query solana using either sol || usdc as denomination

from that we find the market address for the respective pair (I.E: POPCAT/USDC has its own addresss)
    - backend will query serum SDK


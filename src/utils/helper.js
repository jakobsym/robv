import inquirer from "inquirer";

export const baseMintAddressFromArgs = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "tokenAddress",
      message: "Enter a CA",
    },
  ])
  return answer.tokenAddress;
}
  
  
export const quoteMintFromArgs = async () => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'quoteMint',
      message: "Select quote token",
      choices: ['USDC', 'SOL'],
    },
  ])
  return fetchQuoteTokenAddress(answer.quoteMint);
}


const fetchQuoteTokenAddress = (tokenSymbol) => {
  const tokenAddresses = {
    USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    SOL: 'So11111111111111111111111111111111111111112',
  }
  
  return tokenAddresses[tokenSymbol];
}
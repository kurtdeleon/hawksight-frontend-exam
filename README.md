# HS Technical Exam (Junior Frontend)
This technical exam will test your ability in interacting with RPC nodes to query account data, as well as dealing with transaction builder flows. Prior experience building on React is expected.

## Getting Started

### Prerequisites
- Node v18.2.0 or higher
- npm v8.10.0 or yarn v1.22.19

### Installation
1. Clone the repository: `git clone <repo-url>`
2. Create an `.env` file on the root folder and populate with these environment variables:
    ```json
    NEXT_PUBLIC_MAINNET_RPC="your_rpc_url_here"
    NEXT_PUBLIC_DEVNET_RPC="your_rpc_url_here"
    ```
3. Install dependencies: `npm run install` or `yarn`
4. Start development server: `npm run dev` or `yarn run dev`

## Guidelines
- This boilerplate was only provided to speed things up. If you are more comfortable with starting from scratch, feel free to do so as long as it runs on Next.js (Typescript) 
- You may use any library you deem necessary (e.g. `lodash`), though all the libraries you will need are already pre-installed
- We will be valuing functionality over polishing for this test. As a minimum, you may assume that inputs will always be correct.
- It is **required** that you use native JSON RPC methods for this dapp, but you are allowed to use DAS APIs to verify your code. If you do not have access to a Solana RPC yet, you may register for a free one over at [Helius](https://dev.helius.xyz/).
- Your implementation can be archived and sent as a .zip file via email, though you may also fork this branch and deploy on hosting services like Vercel if you wish to do so.
    - Examiners must be able to easily run the project via `npm install && npm run dev`
    - An updated `README` file isn’t required but highly encouraged for documentation. Feel free to add your thought processes as well.
- Submit your code within 3 days of receiving the email.
    - If a time extension is needed, let examiners know as soon as possible
    - You are not required to finish everything, though it would be nice if you did. Our primary  goal here is to understand how fast you are at picking up new tech, and how well you translate your thought processes into code
- Once we verify that you passed the exam, examiners will contact you for the final interview where you’ll present your code to the front-end devs of the team.

## Tasks
1. Querying and parsing on-chain data
    - Once a wallet is connected, display the following:
        - SOL balance of wallet
        - Fungible tokens owned, with amounts displayed in human-readable format
        - BONUS: Optimize how you query account data from RPC
    - You may use Devnet or Mainnet for this task.
        - If you choose to use Devnet, you may [mint new tokens](https://spl.solana.com/token#reference-guide) via CLI or JS, as long as you map the token mints to  metadata for readability
2. Dealing with transactions
    - Create a component that lets you send any non-frozen token to any valid wallet/s in one transaction
        - Amount to be sent will be specified by the user in human-readable format
        - The token/s must be sent to an associated token address (ATA) owned by the receiving wallet, and must operate under the assumption that the receiver may or may not have an ATA initialized already
        - Confirm the status of the transaction after sending
            - Once successful, show a toast indicating that the transaction was sent. Include a link to SolScan for the transaction.
            - On failure, print error logs on console. If you chose to turn on `skipPreflight`, link to failed tx.
        - BONUS: Extend the functionality of the component by having these optional features:
            - Allow users to send multiple tokens at once
            - Allow users to specify the transaction fees for the token transfer
            - Allow users to add a memo instruction
            - Allow users to specify the order of the instructions to be added to the transaction
            - Usage of versioned transactions for compression
3. BONUS: Polishing the dapp
    - Properly render components based on managed state (i.e. when things are loading, show loaders & disable buttons)
    - Gracefully handle errors with basic form validation
    - Add styling
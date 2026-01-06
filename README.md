# Cash App Clone

A Solana mobile dApp that is a clone of Cash App, built with React Native and Expo.

## Features

- 🔐 Solana wallet integration with Mobile Wallet Adapter
- 💰 Send and receive payments
- 📊 Activity tracking
- 🔍 QR code scanning for payments
- 👥 Friend management
- 💼 Cash account management with Solana blockchain

## Tech Stack

- **React Native** with Expo (~50.0.19)
- **Solana Web3.js** for blockchain interactions
- **Anchor Framework** for smart contracts
- **React Navigation** for navigation
- **React Native Paper** for UI components
- **Mobile Wallet Adapter** for wallet connections

## Project Structure

```
cash-app/
├── src/
│   ├── screens/          # App screens (Home, Pay, Send, Receive, etc.)
│   ├── components/       # Reusable components
│   ├── navigators/       # Navigation configuration
│   ├── utils/           # Utility functions and hooks
│   └── cash-app-program/ # Solana program types and IDL
├── anchor/              # Anchor smart contract
└── assets/             # Images and static files
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)
- A Solana wallet app installed on your mobile device

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tngps6ryb9-png/cash-app-clone.git
cd cash-app-clone/cash-app
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn start
# or
npm start
```

4. Run on your device:
```bash
# For Android
yarn android

# For iOS
yarn ios

# For web (limited functionality)
yarn web
```

## Building the App

### Development Build

```bash
yarn build
```

### Local Build

```bash
yarn build:local
```

## Main Screens

- **Home**: View your balance and account details
- **Pay**: Enter amount and send payments
- **Scan**: Scan QR codes for Solana Pay
- **Activity**: View transaction history
- **Send/Receive**: Manage transactions with friends

## Smart Contract

The app uses an Anchor program deployed on Solana Devnet:
- Program ID: `BxCbQks4iaRvfCnUzf3utYYG9V53TDwVLxA6GGBnhci4`

The smart contract handles:
- Cash account initialization
- Fund deposits and withdrawals
- Peer-to-peer transfers
- Friend management

## Development

### Testing

```bash
yarn test
```

### Linting

The project uses TypeScript with strict mode enabled. Run TypeScript checks with:

```bash
npx tsc --noEmit
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes.

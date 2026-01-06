# Cash App Clone - Features

This document describes the main features and functionality of the Cash App Clone application.

## Core Features

### 1. Wallet Integration
- **Solana Wallet Connection**: Connect to Solana wallets using Mobile Wallet Adapter
- **Sign In with Solana (SIWS)**: Secure authentication using Solana wallet
- **Account Management**: View and manage your Solana wallet accounts

### 2. Payment Features

#### Send Money
- Enter custom amount using numeric keypad
- Select recipient from friend list or enter username
- Add memo/reason for payment
- Enable purchase protection option
- Real-time transaction confirmation

#### Request Money
- Create payment requests with custom amounts
- Send requests to friends
- Add context with memo field
- Track pending requests

### 3. Transaction Management

#### Activity Screen
- View complete transaction history
- Filter transactions by type
- See transaction status (pending, completed, failed)
- Track incoming and outgoing payments

#### Cash Account
- Initialize Solana-based cash account
- Deposit funds into your cash account
- Withdraw funds to your wallet
- View current balance

### 4. Social Features

#### Friends List
- Add friends using Solana Name Service (SNS)
- View friend profiles
- Quick access to send/request money from friends
- Manage friend connections

### 5. QR Code & Solana Pay

#### Scan Screen
- Scan QR codes for payments
- Solana Pay integration
- Quick payment processing
- Generate payment QR codes

### 6. Network Selection

#### Settings
- Switch between Solana networks (Mainnet, Devnet, Testnet, Local)
- Configure RPC endpoints
- View network status

## Technical Features

### Blockchain Integration
- **Anchor Program**: Smart contract deployed on Solana
- **Program ID**: `BxCbQks4iaRvfCnUzf3utYYG9V53TDwVLxA6GGBnhci4`
- **Network**: Solana Devnet
- **SPL Token Support**: Compatible with Solana Program Library tokens

### Smart Contract Functions
1. **Initialize Cash Account**: Create user's cash account on-chain
2. **Deposit Funds**: Transfer SOL into cash account
3. **Withdraw Funds**: Transfer SOL from cash account to wallet
4. **Transfer Funds**: Send funds between users
5. **Add Friend**: Register friend relationships on-chain

### Security Features
- Wallet signature verification
- Transaction confirmation before execution
- Purchase protection option
- Secure key storage

## User Interface

### Design Theme
- **Dark Mode**: Primary dark theme (#141414 background)
- **Accent Colors**: Purple/violet highlights (#7F5AF0)
- **Typography**: Clear, readable fonts with proper contrast
- **Icons**: Material Community Icons for consistent UI

### Navigation
- **Bottom Tab Navigation**: Quick access to main features
  - Home: Account overview
  - Pay: Send/receive money
  - Scan: QR code scanner
  - Activity: Transaction history
- **Stack Navigation**: Deep navigation for detailed views

### Screens
1. **Home Screen**: Dashboard with account balance and quick actions
2. **Pay Screen**: Amount entry with numeric keypad
3. **Send Screen**: Payment details and confirmation
4. **Receive Screen**: Request money from others
5. **Scan Screen**: QR code scanning for Solana Pay
6. **Activity Screen**: Transaction history
7. **Settings Screen**: App and network configuration
8. **Input Screen**: Alternative amount entry interface

## Mobile Features

### React Native
- Cross-platform support (iOS & Android)
- Native performance
- Smooth animations and transitions

### Expo
- Easy development and deployment
- Over-the-air updates
- Native module integration

## Future Enhancements (Potential)

- Push notifications for transactions
- Biometric authentication
- Multi-currency support
- Enhanced analytics dashboard
- Recurring payments
- Bill splitting features
- NFT integration
- Token swap functionality

## API Integration

### Solana RPC
- Default endpoint: `https://api.devnet.solana.com`
- Custom RPC endpoint configuration
- Transaction confirmation tracking

### Mobile Wallet Adapter Protocol
- Session authorization
- Transaction signing
- Multi-transaction support

## Data Management

### Local Storage
- Async Storage for app preferences
- Cached transaction history
- Friend list caching

### React Query
- Efficient data fetching
- Automatic cache management
- Background data synchronization

## Developer Features

### Type Safety
- Full TypeScript implementation
- Strict type checking
- Anchor-generated types for smart contracts

### Code Organization
- Component-based architecture
- Separation of concerns (UI, data access, business logic)
- Reusable utility functions

### Testing
- Test infrastructure ready
- Integration with standard testing tools

# cash-app-clone
solana mobile dApp that is a clone of cash app 

## Overview
This is a Solana mobile dApp that replicates the functionality of a cash app, built with React Native and Expo.

## Prerequisites
- Node.js (v16 or higher)
- Yarn or npm
- Expo CLI
- EAS CLI (for building downloadable apps)

## Installation

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

## Development

Start the development server:
```bash
yarn start
# or
npm start
```

Run on Android:
```bash
yarn android
# or
npm run android
```

Run on iOS:
```bash
yarn ios
# or
npm run ios
```

## Building Downloadable Apps

This app uses Expo Application Services (EAS) to build downloadable apps.

### Prerequisites for Building
1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Login to your Expo account:
```bash
eas login
```

3. Configure the project (first time only):
```bash
eas build:configure
```

### Build Commands

**Android Production APK:**
```bash
yarn build:android:production
# or
npm run build:android:production
```

**iOS Production Build:**
```bash
yarn build:ios:production
# or
npm run build:ios:production
```

**Build for all platforms:**
```bash
yarn build:all:production
# or
npm run build:all:production
```

### Download Your Build

After building, EAS will provide a download link for your APK (Android) or IPA (iOS) file. You can:

1. Download directly from the link provided in the terminal
2. Visit https://expo.dev and navigate to your project's builds
3. Share the download link with users to install the app

### Over-The-Air (OTA) Updates

This app is configured with Expo Updates to support OTA updates. After users install your app, you can push updates without requiring them to download a new version:

1. Make changes to your JavaScript/TypeScript code
2. Publish the update:
   ```bash
   eas update --branch production --message "Your update message"
   ```
3. Users will receive the update automatically on next app launch

**Update Channels:**
- `development` - For development builds
- `preview` - For preview/testing builds
- `production` - For production releases

The app uses `appVersion` as the runtime version policy, ensuring compatibility between native code and updates.

### Local Development Build

For development builds with the Expo Dev Client:
```bash
yarn build:local
# or
npm run build:local
```

## App Configuration

- **App Name:** Cash App Clone
- **Android Package:** com.cashappclone.app
- **iOS Bundle ID:** com.cashappclone.app
- **Version:** 1.0.0

## Distribution

After building, you can distribute your app:

- **Android:** Share the APK file directly, or publish to Google Play Store
- **iOS:** Distribute via TestFlight, or publish to Apple App Store

## Technologies Used

- React Native
- Expo & Expo Updates (OTA)
- EAS Build & EAS Submit
- Solana Web3.js
- Solana Mobile Wallet Adapter
- React Navigation
- React Native Paper
- TypeScript


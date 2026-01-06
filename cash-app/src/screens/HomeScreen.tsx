import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Section } from "../Section";
import { useAuthorization } from "../utils/useAuthorization";
import { AccountDetailFeature } from "../components/account/account-detail-feature";
import { SignInFeature } from "../components/sign-in/sign-in-feature";

export function HomeScreen() {
  const { selectedAccount } = useAuthorization();

  return (
    <View style={styles.screenContainer}>
      <Text
        style={{ fontWeight: "bold", marginBottom: 12, color: "white" }}
        variant="displaySmall"
      >
        Cash App Clone
      </Text>
      {selectedAccount ? (
        <AccountDetailFeature />
      ) : (
        <>
          <Section
            title="Solana Blockchain"
            description="Built with Solana blockchain technology and Mobile Wallet Adapter."
          />
          <Section
            title="Send & Receive"
            description="Send and receive payments with your friends using Solana."
          />
          <Section
            title="Get started!"
            description="Connect or Sign in with Solana (SIWS) to link your wallet account."
          />
          <SignInFeature />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: "#141414",
  },
  buttonGroup: {
    flexDirection: "column",
    paddingVertical: 4,
  },
});

"use client";
import { Button } from "@nextui-org/react";
import { BitcoinNetworkType, createInscription } from "sats-connect";

const contentType = "text/html"; 
const content = "My inscription text";
const payloadType = "PLAIN_TEXT";

const suggestedMinerFeeRate = 10; // suggest a fee rate for the transaction in sats/byte

interface InscriptionButtonProps {
  appFee?: number;
  appFeeAddress?: string;
  json?: object;
}

const InscriptionButton: React.FC<InscriptionButtonProps> = ({ appFee = 1000, appFeeAddress = "2MtuQnXGukJhyahSVPLRyFwGxgpwaL6mrc3", json  = {
    token: "my-token",
}}) => {
  const create = async () => {
    await createInscription({
        payload: {
          network: {
            type: BitcoinNetworkType.Testnet,
          },
          contentType,
          content: JSON.stringify(json),
          payloadType,
          appFeeAddress,
          appFee,
          suggestedMinerFeeRate,
        },
        onFinish: (response) => {
          alert(response.txId);
        },
        onCancel: () => alert("Canceled"),
      });
  };

  return (
    <Button onClick={create}>
      Create Inscription
    </Button>
  );
};

export default InscriptionButton;


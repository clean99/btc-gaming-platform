"use client"
import {AddressPurpose, RpcErrorCode, request} from "sats-connect";

export default function Home() {
  const connect = async () => {
    try {

      const response = await request('getAccounts', {
        purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals, AddressPurpose.Stacks],
        message: 'Cool app wants to know your addresses!',
      });
      console.log("getAccounts ~ response:", response)
      if (response.status === 'success') {
        const paymentAddressItem = response.result.find(
          (address) => address.purpose === AddressPurpose.Payment
        );
        const ordinalsAddressItem = response.result.find(
          (address) => address.purpose === AddressPurpose.Ordinals
        );
        const stacksAddressItem = response.result.find(
            (address) => address.purpose === AddressPurpose.Stacks
        );
      } else {
        if (response.error.code === RpcErrorCode.USER_REJECTION) {
          // handle user cancellation error
        } else {
          // handle error
        }
      }
    } catch (err: any) {
        alert(err.error.message);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => connect()}>Request</button>
    </main>
  );
}

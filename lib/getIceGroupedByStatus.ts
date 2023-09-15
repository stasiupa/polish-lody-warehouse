import { databases } from "@/appwrite";
import { IceStatus } from "@/store/IceStore";
import { Models } from "appwrite";

export const getIcegroupedByStatus = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ICE_COLLECTION_ID!
  );

  const icecream = data.documents;

  const iceCreams = icecream.reduce((accumulator, iceCream) => {
    if (!accumulator[iceCream.status]) {
      accumulator[iceCream.status] = [];
      // accumulator.set(iceCream.status, {
      //   id: iceCream.status,
      //   iceCreams: [],
      // });
    }
    accumulator[iceCream.status]!.push({
      $createdAt: iceCream.$createdAt,
      $id: iceCream.$id,
      flavour: iceCream.flavour,
      amount: iceCream.amount,
      status: iceCream.status,
    });
    return accumulator;
  }, {} as Record<IceStatus, IceCream[]>);
  console.log("grouped ices", iceCreams);

  return iceCreams;
};

const iceCreams = {
  "in-stock": [],
  "on-the-way": [],
  "out-of-stock": [],
};

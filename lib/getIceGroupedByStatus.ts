import { databases } from "@/appwrite";

export const getIcegroupedByStatus = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ICE_COLLECTION_ID!,
  );

  const icecream = data.documents;

  const iceCreams = icecream.reduce((accumulator, iceCream) => {
    if (!accumulator.get(iceCream.status)) {
      accumulator.set(iceCream.status, {
        id: iceCream.status,
        iceCreams: []
      })
    }
    accumulator.get(iceCream.status)!.iceCreams.push({
      $createdAt: iceCream.$createdAt,
      $id: iceCream.$id,
      flavour: iceCream.flavour,
      amount: iceCream.amount,
      status: iceCream.status,
    });
    return accumulator
  }, new Map<IceStatus, IceCream>)
  console.log(iceCreams)


  // renderowanie pustego statusu

  const iceCreamStatus: IceStatus[] = ["in-stock", "on-the-way", "out-of-stock"];

  for (const iceCream of iceCreamStatus) {
    if (!iceCreams.get(iceCream)) {
      iceCreams.set(iceCream, {
        id: iceCream,
        iceCreams: [],
      })
    }
  }
  console.log(iceCreams);

  //sortowanie po statusie

  const sortedIceCreams = new Map(
    Array.from(iceCreams.entries()).sort((a, b) => (
      iceCreamStatus.indexOf(a[0]) - iceCreamStatus.indexOf(b[0]))
    ));

  const iceCream: Ice = {
    iceCreams: sortedIceCreams,
  }

  return iceCream
}
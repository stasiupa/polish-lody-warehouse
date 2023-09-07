import { databases } from "@/appwrite";

export const getFlavours = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
  );

  const flavours = data.documents;
  console.log(flavours)
}
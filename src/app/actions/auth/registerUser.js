"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {

    try {
        const result = await dbConnect(collectionNames.users).insertOne(payload);
        return result;
    } catch (error) {
        console.error("Error registering user:", error);
        throw new Error("User registration failed");
    }
};
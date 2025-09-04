"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {

    try {
        const result = await dbConnect("users").insertOne(payload);
        return result;
    } catch (error) {
        console.error("Error registering user:", error);
        throw new Error("User registration failed");
    }
};
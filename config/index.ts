import * as dotenv from "dotenv";

dotenv.config();

// const API_URL = 'http://45.77.182.167/graphql'
// local
const API_URL = "http://127.0.0.1:3000/graphql";

export const config = {
    domain: process.env.APP_HOST ?? "localhost",
    port: process.env.APP_PORT ?? 3000,
    apiUrl: process.env.FILMATRON_SERVER_URL ?? API_URL,
    admin: {
        // wallet address that admin will sign transaction when film maker action create a collection for their NFT collection
        publickKey:
            process.env.ADMIN_PUBLICK_KEY ??
            "89Fh4QKhCEJ5rC1Bf4utchfmqPNejYTfjoW6VxDL8YqB",
    },
};

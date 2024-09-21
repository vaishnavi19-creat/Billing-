import { Client } from "../db/entities/Client";

export const isClientActive = (client: Client): boolean => {
    // to check if a client is active
    return client.id % 2 === 0;
};





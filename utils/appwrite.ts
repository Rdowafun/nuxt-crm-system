import { APP_WRITE_ID } from '@/app.constants'
import { Account, Client, Databases, Storage } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)
export default async ({ req, res, log, error }) => {
    res.send('I am alive!', 200, { "Access-Control-Allow-Origin": "*" });
};

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client)
export const storage = new Storage(client)

import { APP_WRITE_ID } from '@/app.constants'
import { Account, Client, Databases, Storage } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)
const addHeaders = (res) => {
    let obj = {}
    obj.send = (body, statusCode = 200, headers = {}) => {
        headers["Access-Control-Allow-Origin"] = "*";
        return res.send(body, statusCode, headers);
    }
    obj.json = (body, statusCode = 200, headers = {}) => {
        headers["Access-Control-Allow-Origin"] = "*";
        return res.json(body, statusCode, headers);
    }
    obj.empty = (statusCode = 204, headers = {}) => {
        headers["Access-Control-Allow-Origin"] = "*";
        return res.empty(statusCode, headers);
    }
    obj.redirect = (url, statusCode = 301, headers = {}) => {
        headers["Access-Control-Allow-Origin"] = "*";
        return res.redirect(url, statusCode, headers);
    }
    return obj;
}

export default async ({ req, res, log, error }) => {
     res = addHeaders(res)
    res.send('I am alive!')
}

export const account = new Account(client)
export { ID } from 'appwrite'
export const DB = new Databases(client)
export const storage = new Storage(client)

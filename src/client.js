import * as contentful from "contentful";
import CONFIG from "./config"


export const client = contentful.createClient({
    space: CONFIG.SPACE_ID,
    accessToken: CONFIG.MY_API_TOKEN
})
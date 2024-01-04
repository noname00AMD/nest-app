// import generateRssFeed from "../../../utils/generateRSSFeed";
// generateRssFeed()
import webpush from "web-push"
let publicVapidKey="BNg1VseiEwrH-vcy5QH20HvCE0AANug1voMtPfYZc7crRD-0TAfYfUh8H9UPydEGV8omFhpgYJ-33bdsQlKS0a4";
let privateVapidKey="fQrSohKEsUq7MJHMC4jVQC1bWtSOKsvY204xBBtq3No"
import type { NextApiRequest, NextApiResponse } from 'next'
 
webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
  );
export  async function POST( req: Request,    res: Response) {
   
    const subscription = await req.json()

    // Send 201 - Responseource created
    console.log("res");
    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
    // Pass object into sendNotification
    console.log("push");
    webpush
    .sendNotification(subscription, payload).then(rs=>{
        console.log(rs);
        
    })
    .catch(err  => console.error(err));
    return Response.json({})
}


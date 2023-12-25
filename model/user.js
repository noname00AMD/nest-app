import prisma from '../prisma/prisma.js';
import { bigintToString } from "../utils/helper"
var user = {}

user.findAll = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {
            var user_arr = bigintToString(await prisma.user.findMany({
                take: limit
            }))
            resolve(user_arr)
        } catch (error) {
            reject(error)
        }
    })
}






export default user

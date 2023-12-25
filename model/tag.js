
// import prisma from '../prisma/prisma';
// import helper from "../helper"
import prisma from '../prisma/prisma.js';
import { bigintToString } from "../utils/helper"
var tag = {}

tag.findAll = function (limit = 20) {
    return new Promise(async (resolve, reject) => {
        try {
            var tag_arr = bigintToString(await prisma.terms.findMany({
                take: limit
            }))
            resolve(tag_arr)
        } catch (error) {
            reject(error)
        }
    })
}






export default tag

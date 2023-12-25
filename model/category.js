import prisma from '../prisma/prisma';
import { bigintToString } from "../utils/helper"
import { TaxonomyType } from "@prisma/client"

var allCategory
var cat = {}

cat.findAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var categories = bigintToString(await prisma.term_taxonomy.findMany({
                where: {
                    taxonomy: TaxonomyType.CATEGORY
                },
                select: {
                    taxonomy: true,
                    discription: true,
                    parent: true,
                    count: true,
                    terms: {

                    }
                },
            }))
            resolve(categories)
        } catch (error) {
            reject(error)
        }
    })
}

cat.getAll = function () {
    return new Promise(async (resolve, reject) => {
        if (allCategory) {
            return resolve(allCategory)
        }
        cat.findAll().then((rs) => {
            allCategory = rs
            resolve(allCategory)
        }).catch((e) => {
            reject(e)
        })
    })
}

export default cat

// import categoryModel from "../../model/category"
import { bigintToString } from "../../../helper"
import prisma from "../../../prisma/prisma"
export default async function handler(req, res) {
    try {
        // console.log(req.query);
        var posts = await prisma.category.findUnique({
            where: { slug: "gai-xinh" },
            select: {
                post: {
                    take: 4
                },
            }
        })
        // helper.bigintToString(await categoryModel.getAll())
        // console.log(categories);

        //  categories.map(item => {
        //     console.log(item)

        //     item.id = item.id.toString()
        //     item.size = item.size.toString()
        //     if (item.parent) {
        //         item.parent = item.parent.toString()
        //     }
        //     return item
        // });
        res.json(
            bigintToString(posts)
        )
    } catch (error) {
        console.error(error);
    }
    // }
}

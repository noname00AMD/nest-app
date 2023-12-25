import NewProduct from '@/app/_components/NewProduct'
// import prisma from '../../../prisma/prisma';
// import helper from "../../../helper"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
export default async function Add(props) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT


    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    siteInfo = {
        thumbTypes: [
            "v", "h"
        ],
        langSupport: [
            "vi",
            "en"
        ]
    }
    categories = []



    return (
        <>
            <NewProduct categories={categories} siteInfo={siteInfo} {...props} />
        </>
    )
}



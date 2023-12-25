import NewTag from "@/app/_components/NewTag"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';

export default async function AddTag(props) {
    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

    return (
        <>
            <NewTag categories={categories} siteInfo={siteInfo} {...props} />
        </>
    )
}



import SiteInfo from "@/app/_components/SiteInfo"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
export default async function Admin(props) {
    var admin_path = process.env.ADMIN_PATH
    var host = process.env.HOST

    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

    return (
        <>
            <SiteInfo categories={categories} siteInfo={siteInfo} {...props} />
        </>
    )
}


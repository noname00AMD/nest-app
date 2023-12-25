import AdminTag from '@/app/_components/Tag'
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import tagM from '@/../model/tag';
// import userM from '../../../model/user';
export default async function Tag(props) {
    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var tag_arr = await tagM.findAll()
    return (
        <>
            <AdminTag categories={categories} siteInfo={siteInfo} tag_arr={tag_arr} {...props} />
        </>
    )
}

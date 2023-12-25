import AdminProduct from '@/app/_components/AdminProduct'
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import postsM from '@/../model/posts';
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
export default async function Product(props) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT

    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

    var article = await postsM.findAll()
    article = []
    return (
        <>
            <AdminProduct article={article} {...props} />
        </>
    )
}


import AdminArticle from '@/app/_components/AdminArticle'
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import postsM from '@/../model/posts';
// import categoryModel from "../../model/category"
// import siteInfoModel from "../../model/siteInfo"
export default async function Article(props) {

    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT

    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()

    var article = await postsM.findAll()
    article = []
    return (
        <>
            <AdminArticle article={article} {...props} />
        </>
    )
}


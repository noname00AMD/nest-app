import AdminMedia from '@/app/_components/Media'
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import postM from '@/../model/posts';
export default async function Media(props) {
    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var media_arr = await postM.findAllMedia()
    return (
        <>
            <AdminMedia media_arr={media_arr} {...props} />
        </>
    )
}


import AdminUser from '@/app/_components/User'
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import userM from '@/../model/user';
export default async function User(props) {
    var admin_path = process.env.ADMIN_PATH
    var host = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    var user_arr = await userM.findAll()
    user_arr = []

    return (
        <>
            <AdminUser user_arr={user_arr} categories={categories} siteInfo={siteInfo} {...props} />
        </>
    )
}

import AdminDashboard from '@/app/_components/AdminDashboard'

// import prisma from '../../prisma/prisma';
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
export default function Page(props) {
    var admin_path = process.env["ADMIN_PATH"]

    if (props.params.admin !== admin_path) {
        return "err"
    }
    return (<>
        < AdminDashboard admin_path={admin_path} />
    </>
    )

}

export async function getData({ req, res }) {

    var admin_path = process.env.ADMIN_PATH
    console.log(req.params);
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    try {

        return {
            props: {
                siteInfo,
                categories,
                admin_path,
            },
        }
    } catch (error) {

        return {
            props: {
                error: JSON.stringify(error)
            }
        }
    }

}

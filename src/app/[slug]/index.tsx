// import { useRouter } from 'next/router'
// import categoryM from "./../model/category"
// import siteInfoM from './../model/siteInfo';
// import { bigintToString } from "./../helper"
// import prisma from "./../prisma/prisma"
// export default function Slug(props) {
//     return "ok"
//     // console.log(router.asPath);
//     // console.log(router.pathname);
//     // console.log(props);
//     if (props.error) {
//         console.error(props.error);
//         // return <ErrorHandle {...props} />
//     }
//     // return <Category {...props} />
// }

// export async function getServerSideProps({ req, res, resolvedUrl }) {
//     var admin_path = process.env.ADMIN_PATH
//     var host = process.env.HOST
//     resolvedUrl = resolvedUrl.substring(1)
//     try {

//         var siteInfo = await siteInfoM.getAll()
//         var categories = await categoryM.getAll()
//         var post_arr = await prisma.category.findUnique({
//             where: { slug: resolvedUrl },
//             select: {
//                 posts: {
//                     take: 4
//                 },
//             }
//         })
//         if (post_arr === null) {
//             throw new Error("notfound")
//         }
//         post_arr = bigintToString(post_arr.posts)
//         return {
//             props: {
//                 post_arr,
//                 siteInfo,
//                 categories,
//                 admin_path,
//                 host
//             },
//         }
//     } catch (error) {
//         console.error(error);
//         return {
//             props: {
//                 error: JSON.stringify(error)
//             }
//         }
//     }

// }
import { component$ } from '@builder.io/qwik';
// import { routeLoader$ } from '@builder.io/qwik-city';
import HomeBody from "../../components/HomeBody"


export default component$((props) => {
    return (
        <>
            <HomeBody siteInfo={...props.siteInfo} categories={...props.categories} />
        </>
    );
});

export const head = {
    title: 'Welcome to Qwik2',
    siteInfo: [],
    categories: [],
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};

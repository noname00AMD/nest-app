import HomeBody from '@/app/_components/HomeBody'
// import prisma from '../prisma/prisma';
// import helper from "../helper"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
export default async function Page(props) {
    const data = await getData()
    return (<>
        <HomeBody {...data} />
    </>)
}

export const metadata = {
    icons: {
        icon: {
            url: "/favicon2.ico",
            type: "image/x-icon",
        },
        shortcut: { url: "/favicon2.ico", type: "image/x-icon" },
    },
    title: "home"
};

export async function getData() {
    var trendingTags = []
    var siteInfo = await siteInfoM.getAll()
    var categories = await categoryM.getAll()
    siteInfo = {
        keyword: [],
        langSupport: [],
    }
    categories = []
    // console.log(categories);
    return {
        siteInfo,
        categories,
        trendingTags,
    }





}

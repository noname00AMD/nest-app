// import {  NavActiveLink } from "next/link"
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import style from "@/../sass/NavigationBar.module.sass"
export default function NavigationBar(props) {
    const activeClassName = "text-red-600 font-bolder"
    const link_list = [

        {
            href: "/" + props.admin_path,
            className: "",
            textLink: "Admin"
        },
        {
            href: "/" + props.admin_path + "/article",
            className: "",
            textLink: "Articles",
            child: [
                {
                    href: "/" + props.admin_path + "/article/add",
                    className: "",
                    textLink: "New Articles",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/product",
            className: "",
            textLink: "Product",
            child: [
                {
                    href: "/" + props.admin_path + "/product/add",
                    className: "",
                    textLink: "New Product",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/category",
            className: "",
            textLink: "Category",
            child: [
                {
                    href: "/" + props.admin_path + "/category/add",
                    className: "",
                    textLink: "   New Category",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/user",
            className: "",
            textLink: "User",
            child: [
                {
                    href: "/" + props.admin_path + "/user/add",
                    className: "",
                    textLink: "   New User",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/media",
            className: "",
            textLink: "Media",
            child: [
                {
                    href: "/" + props.admin_path + "/media/add",
                    className: "",
                    textLink: "   New Media",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/tag",
            className: "",
            textLink: "Tags",
            child: [
                {
                    href: "/" + props.admin_path + "/tag/add",
                    className: "",
                    textLink: "   New Tag",
                }
            ]
        },
        {
            href: "/" + props.admin_path + "/site-info",
            className: "",
            textLink: "Site Info"
        },


    ]
    function create({ href, className, textLink }: { href: string, className: string, textLink: string }) {
        return (<>
            <ActiveLink href={href} className={className} activeClassName={activeClassName}>
                {textLink}
            </ActiveLink>
        </>)
    }
    return (<>

        <ul className={style.navigationBar}>
            <li>
                <Link href="/" >
                    Back to Home
                </Link>
            </li>
            {
                link_list.map((link, idx) => {
                    return (
                        <li key={idx}>
                            {
                                create(link)
                            }
                            {
                                link.child && (
                                    <>
                                        <ul>
                                            {
                                                link.child.map((child_link, idz) => {
                                                    return (
                                                        <li key={idx}>
                                                            {
                                                                create(child_link)
                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </>
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>

    </>)
}

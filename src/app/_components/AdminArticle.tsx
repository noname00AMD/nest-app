import Link from "next/link"
import style from "@/../sass/AdminArticle.module.sass"
export default function AdminArticle(props) {
    return (<>
        <h3> All Article : </h3>
        <ul>
            {props.article.forEach((item, index) => {
                <li style={{ margin: "20px 0", fontSize: "2rem" }}>
                    <Link href={"/" + item.slug}>
                        {item.title}
                    </Link>
                </li>
            })}
        </ul>


    </>)
}


import React from 'react';
import style from "@/../sass/Header.module.sass"
import Link from 'next/link';
export default function Submenu({ showing, hide, categories, willHide }) {
    return (
        <>
            {showing && <>
                <div className={style.submenu + " " + (willHide ? style.hide : "")} aria-hidden="true" >
                    <div style={{}}>
                        <div className={"cont " + style.cont}>
                            <div className="row">
                                {categories.map((category, index) => {
                                    if (category.type === "category" && category.visible === true) {
                                        var sub = categories.filter(cate => {
                                            return cate.type === "subcategory" && cate.parent === category.id
                                        })
                                        return (
                                            <div className={"col-3"} key={category.id} >
                                                <h3>
                                                    <Link onClick={hide} href={"/" + category.slug}>
                                                        {category.cate_name}
                                                    </Link>
                                                </h3>
                                                {sub.length !== 0 &&
                                                    <ul>
                                                        {sub.map((subcate, subindex) => {
                                                            if (subcate.visible === 1 && subindex < 5) {
                                                                return (
                                                                    <li key={subcate.id}>
                                                                        <Link onClick={hide} href={"/" + category.slug + '/' + subcate.slug}>
                                                                            {subcate.cate_name}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            }
                                                        })
                                                        }
                                                    </ul>
                                                }
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <button className={style.hide_all_btn} onClick={hide}>Close <span>&#10006;</span></button>
                        </div>
                    </div>
                </div>
            </>
            }
        </>)
}



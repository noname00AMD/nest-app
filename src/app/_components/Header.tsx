"use client";
import Link from "next/link"
import { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image"
import Submenu from "@/app/_components/Submenu";
import style from "@/../sass/Header.module.sass"
export default function Header(props) {
    const [time, setTime] = useState((new Date()).toDateString());
    const topBarElm = useRef()
    const headerElm = useRef()
    var show_all_btn = useRef()
    var hide_all_btn = useRef()
    var submenu = useRef()
    var [show, setShow] = useState(false)
    var [willHide, setWillHide] = useState(false)
    var [pin, setPin] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setPin(false)
                    // headerElm.current.classList.remove("pin")
                } else {
                    setPin(true)
                }
            },
            { threshold: [0] }
        );
        observer.observe(topBarElm.current)

    })
    var search = () => {
        console.log("search");
    }
    var show_menu = () => {

        if (show === true) {
            setWillHide(show)
            setTimeout(() => {
                setWillHide(!show)
                setShow(!show)
            }, 300);
            return
        }
        setShow(!show)
    }
    return (
        <>

            <div className={style.top_bar + " grid grid-cols-12 gap-4 xl:container xl:mx-auto"} ref={topBarElm}>
                <div className={"col-span-2 " + style.logo + " " + style["col-2"]}>
                    <div style={{ width: "168px" }}>
                        <Link href="/" title="home"
                            style={{ backgroundImage: "url('/images/logo.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>

                        </Link>
                    </div>
                </div>
                <div className={"col-span-2 " + style["col-2"]}>
                    <time className={style.time} id={"time"}>{time}</time>
                </div>
                <div className={"col-span-2 " + style["col-2"]}>
                    <p className={style.lang}>eng vi</p>
                </div>
                <div className={"col-span-2 " + style["col-2"]}>
                    <Link href={"/" + props.admin_path}>

                        Admin

                    </Link>
                    <Link href="/signup">signup</Link>
                    <Link href="/signin">signin</Link>
                </div>
                <div className={"col-span-2 " + style["col-2"]}>
                    <div>
                        <input placeholder="tim kiem" type="text" />
                        <ul className={style.search_dropdown + " hidden"}>
                            <li>
                                asdas
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"col-span-2 " + style["col-2"]}>
                    <button className={style.search} type="submit" onClick={search}>Search</button>
                </div>


            </div>

            <header className={style.header + " " + (pin ? style.pin : "") + " " + (show ? style.show : "")} >
                <ul className={style.nav + " grid grid-cols-12 gap-4 xl:container xl:mx-auto " + style["col-12"]}>
                    <li className={style.home + " col-span-1"}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    {props.categories.map((category, index) => {
                        if (category.type === "category" && category.visible === true && index <= 5) {
                            return (
                                <li key={category.id} className={"category"}>
                                    <Link href={category.slug}>
                                        {category.cate_name}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                    <li className={style.show_all_btn + " relative col-start-12"} ref={show_all_btn} onClick={show_menu}>
                        <button className="absolute right-0 top-0 bottom-0">{show ? <>&#10006; </> : <> &#8759;</>}</button>
                    </li>
                </ul>

                <Suspense>
                    <Submenu
                        showing={show}
                        hide={show_menu}
                        categories={props.categories}
                        willHide={willHide}
                    />
                </Suspense>
            </header>
        </>
    )
}

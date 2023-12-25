"use client";
import ImgInput from "./ImgInput"
import style from "@/../sass/NewMedia.module.sass"
import { useState, useEffect, useRef } from "react"

// import { textToSlug } from "../../helper"
export default function NewMedia(props) {
    var [title, setTitle] = useState('')
    var [media, setMedia] = useState(props.media)
    var submit = (e) => {
        e.preventDefault()
        var formData = new FormData();
        Array.from(media).forEach((elm) => {
            formData.append("media", elm)
        })
        formData.append("title", title)
        fetch(props.host + "/api/media", {
            method: "post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: formData
        })
    }


    var handleTitle = (e) => {
        setTitle((e.target.value))
    }


    return (
        <>
            <div className={"col-9 start-4 " + style.newmedia}>
                <form action="submit" onSubmit={submit}>

                    <ImgInput
                        change={(v) => {
                            setMedia(v)
                        }}
                        type="media"
                    />
                    <button className={style.done}
                        type="submit"><strong>Done</strong></button>
                </form>
            </div>


        </>
    )
}


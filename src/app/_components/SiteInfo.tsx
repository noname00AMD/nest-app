"use client";
export default function SiteInfo(props) {
    var onc = () => {

    }
    return (
        <>
            <div className="col-9">
                <h1>siteInfo</h1>
                <form action="">
                    {Object.keys(props.siteInfo).map((key, id) => {
                        return (
                            <div key={id}>
                                <label>{key}</label>
                                <input style={{ outline: "1px solid black" }} onChange={onc} value={props.siteInfo[key]}></input>
                            </div>
                        )
                    })}
                    <button>Save</button>
                </form>

            </div>
        </>
    )
}

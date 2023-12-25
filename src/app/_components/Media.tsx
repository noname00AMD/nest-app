export default function User(props) {
    return (
        <>
            <h3>All Media :</h3>
            <ul>
                {props.media_arr.map((item, index) => {
                    return (

                        <li key={index}>
                            <span>{item.id}</span>
                            <span>{item.post_author_id}</span>
                            <span>{item.post_mime_type}</span>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

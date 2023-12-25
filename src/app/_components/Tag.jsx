export default function Tag(props) {
    return (
        <>
            <h3>All Tag : </h3>
            <ul>
                {props.tag_arr.map((item, index) => {
                    return (

                        <li key={index}>
                            <span>{item.id}</span>
                            <span>{item.tag_name}</span>
                            <span>{item.slug}</span>
                            <span>{item.size}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

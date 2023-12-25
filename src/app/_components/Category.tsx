
export default function Category(props) {
    return (
        <>
            <h3>All Category : </h3>
            <ul >
                {props.categories.map((item, index) => {
                    return (

                        <li key={index}>
                            <span>{item.id}</span>
                            <span>{item.cate_name}</span>
                            <span>{item.slug}</span>
                            <span>{item.visible}</span>
                            <span>{item.size}</span>
                            <span>{item.parent}</span>
                            <span>{item.type}</span>
                            <span>{item.description}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

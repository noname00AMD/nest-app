import Layout from "./layout/CategoryLayout"

export default function Product(props) {
  return (
    <>
      <Layout {...props}>
        {props.product.id}
        {props.product.title}/
        {props.product.price}
      </Layout>
    </>
  )
}

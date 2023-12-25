import './globals.css'
import Header from "./_components/Header"
import Footer from "./_components/Footer"
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import { cache, Suspense } from 'react'

export const revalidate = 3600
export const getItem = cache(async (id) => {
  // const item = await db.item.findUnique({ id })
  var siteInfo = await siteInfoM.getAll()
  var categories = await categoryM.getAll()
  return {
    siteInfo,
    categories,
    admin_path: process.env["ADMIN_PATH"]
  }
  // return item
})
export default async function RootLayout({ children }) {
  var props = await getItem()
  return (
    <html lang="en">
      <body>
        <Header {...props} />
        {children}
        <Suspense>
          <Footer {...props} />
        </Suspense>

      </body>

    </html>
  )
}

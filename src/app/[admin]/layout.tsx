import NavigationBar from "@/app/_components/NavigationBar"


export default async function Layout(props) {
  var admin_path = process.env["ADMIN_PATH"]
  console.log(props.params);

  if (props.params.admin !== admin_path) {
    return "err"
  }
  return (<>
    <div className="grid grid-cols-12 gap-4 xl:container xl:mx-auto">
      <div className="col-span-3">
        <NavigationBar admin_path={admin_path} />
      </div>
      <div className="col-span-9 col-start-4">
        {props.children}
      </div>
    </div>
  </>
  )
}

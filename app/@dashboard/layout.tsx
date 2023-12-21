import { ReactNode } from "react"
import Layout from "./_ui/Layout/Layout"

type DashboardLayoutProps = {
    children: ReactNode
  }
function DashboardLayout({children}:DashboardLayoutProps){
    return(
        <Layout>
            {children}
        </Layout>
    )
}
export default DashboardLayout
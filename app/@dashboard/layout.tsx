import { ReactNode } from "react"
import Layout from "./ui/Layout/Layout"

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
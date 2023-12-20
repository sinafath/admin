import Layout from "@/ui/Layout/Layout"
import { ReactNode } from "react"

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
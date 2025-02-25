import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import AdminLayout from "../components/admin/AdminLayout"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isAdminRoute = router.pathname.startsWith("/admin")

  if (isAdminRoute) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    )
  }

  return <Component {...pageProps} />
}

export default MyApp


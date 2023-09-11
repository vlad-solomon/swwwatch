import "./Toast.scss";
import { Toaster } from "react-hot-toast"

export default function Toast() {
    return <Toaster gutter={10} containerClassName="toaster" toastOptions={{
        className: "toast",
        duration: 1500
    }} />
}

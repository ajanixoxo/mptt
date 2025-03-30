import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="bg-black">
            <Navbar />
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>404</h1>
                <p style={{ fontSize: "20px" }}>Oops! The page you are looking for does not exist.</p>
                <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>Go back home</Link>
            </div></div>
    );
}

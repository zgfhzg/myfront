import Link from "next/link";

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}
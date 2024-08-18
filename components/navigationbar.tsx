import Link from "next/link";

interface NavigationBarProps {
    navClose: () => void;
}

export default function NavigationBar({ navClose }: NavigationBarProps) {
    return (
        <>
            <nav id="menu">
                <div className="inner">
                    <h2 id="menuTitle">Menu</h2>
                    <ul>
                        <li><Link href="/" onClick={navClose}>Home</Link></li>
                        <li><Link href="/101" onClick={navClose}>101</Link></li>
                        <li><Link href="/102" onClick={navClose}>102</Link></li>
                        <li><Link href="/107" onClick={navClose}>107</Link></li>
                        <li><Link href="/admin" onClick={navClose}>Admin</Link></li>
                    </ul>
                </div>
                <a className="close" href="#" onClick={navClose}>Close</a>
            </nav>
        </>
    )
}

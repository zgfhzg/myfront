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
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/app/about-us">Ipsum veroeros</Link></li>
                        <li><Link href="/app/about-us">Tempus etiam</Link></li>
                        <li><Link href="/app/about-us">Elements</Link></li>
                    </ul>
                </div>
                <a className="close" href="#" onClick={navClose}>Close</a>
            </nav>
        </>
    )
}

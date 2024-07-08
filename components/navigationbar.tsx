"use client";
import Link from "next/link";

export default function NavigationBar() {
    return (
        <>
            <nav id="menu">
                <div className="inner">
                    <h2>Menu</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/app/about-us">Ipsum veroeros</Link></li>
                        <li><Link href="/app/about-us">Tempus etiam</Link></li>
                        <li><Link href="/app/about-us">Elements</Link></li>
                    </ul>
                </div>
                <a className="close" href="/" onClick={() => console.log('close')}>Close</a>
            </nav>
        </>
    )
}
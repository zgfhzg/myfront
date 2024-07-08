"use client";
import NavigationBar from "@/components/navigationbar";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header id="header">
                <div className="inner">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <span className="symbol">
                            <Image src="/images/logo.svg" alt="" width="30" height="30" />
                        </span>
                        <span className="title">React Responsive App</span>
                    </a>
                    {/* Menu Button */}
                    <nav>
                        <ul>
                            <li>
                                <a href="/" onClick={() => console.log("open")}>Menu</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <NavigationBar />
        </>
    )
}
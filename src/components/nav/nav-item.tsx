"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    href: string;
    text: string;
};
function NavItem({ href, text }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            passHref
            className={cn(
                "text-lg font-semibold transition-colors hover:text-primary",
                isActive ? "text-brand" : "text-white"
            )}
        >
            {text}
        </Link>
    );
}

export default NavItem;

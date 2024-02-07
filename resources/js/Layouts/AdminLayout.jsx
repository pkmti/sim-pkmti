import Sidebar from "@/Components/Sidebar";
import {
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";

export default function AdminLayout({ user, title, children }) {
    const navigations = [
        { icon: <HomeIcon className="h-6 w-6" />, text: "Beranda" },
        { icon: <UserIcon className="h-6 w-6" />, text: "Partisipan" },
        { icon: <UserGroupIcon className="h-6 w-6" />, text: "Tim" },
        {
            icon: <DocumentTextIcon className="h-6 w-6" />,
            text: "Proposal PKM",
        },
    ];

    return (
        <>
            <Head title={title} />
            <Sidebar user={user} navigations={navigations}>
                {children}
            </Sidebar>
        </>
    );
}

import Sidebar from "@/Components/Sidebar";
import { useParam } from "@/utils";
import {
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";

export default function ParticipantLayout({ user, title, children }) {
    const navigations = [
        {
            icon: <HomeIcon className="h-6 w-6" />,
            text: "Beranda",
            link: route("dashboard"),
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            text: "Tim Saya",
            link: route("teams.my-team"),
        },
        {
            icon: <DocumentTextIcon className="h-6 w-6" />,
            text: "Proposal PKM",
            link: user.team_id
                ? route("proposals.show", user.team_id)
                : route("teams.my-team"),
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

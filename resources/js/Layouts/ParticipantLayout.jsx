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
            link: route("teams.myTeam"),
        },
        {
            icon: <DocumentTextIcon className="h-6 w-6" />,
            text: "Proposal PKM",
            link: user.team_id
                ? route("proposals.show", user.team_id)
                : route("teams.myTeam"),
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

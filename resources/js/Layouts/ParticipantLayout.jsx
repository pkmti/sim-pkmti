import Sidebar from "@/Components/Sidebar";

export default function ParticipantLayout({ user, children }) {
    return (
        <>
            <Sidebar user={user}>{children}</Sidebar>
        </>
    );
}

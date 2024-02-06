import Sidebar from "@/Components/Sidebar";

export default function AdminLayout({ user, children }) {
    return (
        <>
            <Sidebar user={user}>{children}</Sidebar>
        </>
    );
}

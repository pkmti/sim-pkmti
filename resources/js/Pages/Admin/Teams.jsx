import AdminLayout from "@/Layouts/AdminLayout";

export default function Team({ auth, teams }) {
    return (
        <AdminLayout user={auth.user} title="Tim">
            <div className="overflow-x-auto">Hello</div>
        </AdminLayout>
    );
}

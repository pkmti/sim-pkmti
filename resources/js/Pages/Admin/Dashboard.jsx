import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ auth }) {
    return (
        <>
            <AdminLayout user={auth.user} title="Admin"></AdminLayout>
        </>
    );
}

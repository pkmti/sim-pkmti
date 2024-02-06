import ParticipantLayout from "@/Layouts/ParticipantLayout";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            {auth.user.role == "participant" ? (
                <ParticipantLayout user={auth.user}>
                    <Head title="Beranda" />
                </ParticipantLayout>
            ) : (
                <AdminLayout>
                    <Head title="Admin" />
                </AdminLayout>
            )}
        </>
    );
}

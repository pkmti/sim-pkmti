import ParticipantLayout from "@/Layouts/ParticipantLayout";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ auth }) {
    return (
        <>
            {auth.user.role == "participant" ? (
                <ParticipantLayout
                    user={auth.user}
                    title="Beranda"
                ></ParticipantLayout>
            ) : (
                <AdminLayout user={auth.user} title="Admin"></AdminLayout>
            )}
        </>
    );
}

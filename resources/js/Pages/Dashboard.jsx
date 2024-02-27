import ParticipantLayout from "@/Layouts/ParticipantLayout";

export default function Dashboard({ auth }) {
    return (
        <ParticipantLayout user={auth.user} title="Beranda">
            ini dashboard.
        </ParticipantLayout>
    );
}

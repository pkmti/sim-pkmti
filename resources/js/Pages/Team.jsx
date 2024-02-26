import ParticipantLayout from "@/Layouts/ParticipantLayout";

export default function Team({ auth, team }) {
    return (
        <ParticipantLayout user={auth.user} title="Tim">
            Ini tim saya.
        </ParticipantLayout>
    );
}

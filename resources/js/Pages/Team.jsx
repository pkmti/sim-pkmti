import ParticipantLayout from "@/Layouts/ParticipantLayout";

export default function Team({ auth }) {
    return <ParticipantLayout user={auth.user} title="Tim"></ParticipantLayout>;
}

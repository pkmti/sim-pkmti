import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";

export default function Dashboard({ auth, flash }) {
    return (
        <ParticipantLayout user={auth.user} title="Beranda">
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    content={flash.msg}
                    id="team_information"
                />
            )}
            ini dashboard.
        </ParticipantLayout>
    );
}

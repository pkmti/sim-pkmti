import ParticipantLayout from "@/Layouts/ParticipantLayout";
import CreateTeam from "./Partials/CreateTeam";
import JoinTeam from "./Partials/JoinTeam";
import Toast from "@/Components/Toast";

export default function NotTeamed({ auth, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Tim">
            {flash.msg && <Toast id="information" content={flash.msg} />}
            <div className="lg:flex lg:gap-10">
                <JoinTeam />
                <div className="my-8 lg:hidden divider">Atau</div>
                <CreateTeam />
            </div>
        </ParticipantLayout>
    );
}

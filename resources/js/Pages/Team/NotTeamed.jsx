import ParticipantLayout from "@/Layouts/ParticipantLayout";
import CreateTeam from "./Partials/CreateTeam";
import GotoTeamByToken from "./Partials/GotoTeamByToken";

export default function NotTeamed({ auth }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Tim">
            <div className="lg:flex lg:gap-10">
                <GotoTeamByToken />
                <div className="my-8 lg:hidden divider">Atau</div>
                <CreateTeam />
            </div>
        </ParticipantLayout>
    );
}

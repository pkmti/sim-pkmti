import ParticipantLayout from "@/Layouts/ParticipantLayout";
import TeamInformation from "./Partials/TeamInformation";
import Members from "./Partials/Members";
import Toast from "@/Components/Toast";

export default function Index({ auth, team, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Tim">
            {flash.msg && <Toast content={flash.msg} id="team_information" />}
            <div className="lg:flex lg:gap-10 lg:overflow-x-visible overflow-x-auto">
                <TeamInformation user={user} team={team} />
                <div className="my-8 lg:hidden"></div>
                <Members user={user} team={team} />
            </div>
        </ParticipantLayout>
    );
}

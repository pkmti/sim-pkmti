import ParticipantLayout from "@/Layouts/ParticipantLayout";
import TeamInformation from "./Partials/TeamInformation";
import Members from "./Partials/Members";

export default function Index({ auth, team }) {
    const { user } = auth;
    console.log(team);

    return (
        <ParticipantLayout user={user} title="Tim">
            <TeamInformation team={team} />
            <Members members={team.members} />
        </ParticipantLayout>
    );
}

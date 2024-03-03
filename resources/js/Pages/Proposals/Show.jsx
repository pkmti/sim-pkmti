import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { useRandomInt } from "@/utils";
import UpdateProposalForm from "./Partials/UpdateProposalForm";
import SubmitProposalForm from "./Partials/SubmitProposalForm";

export default function Show({ auth, proposal, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout title="Proposal" user={user}>
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    id="update_password_success"
                    content={flash.msg}
                />
            )}

            {proposal ? (
                <UpdateProposalForm user={user} proposal={proposal} />
            ) : (
                <SubmitProposalForm />
            )}
        </ParticipantLayout>
    );
}

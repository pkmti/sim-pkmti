import ParticipantLayout from "@/Layouts/ParticipantLayout";
import useRandomTeamName from "@/utils";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function Team({ auth, team }) {
    const { user } = auth;
    const { data, setData, post, processing, errors, reset } = useForm({
        team_name: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("team.create"));
    };

    return (
        <ParticipantLayout user={user} title="Tim">
            <form onSubmit={submit}>
                <div className="form-control my-4">
                    <label htmlFor="team_name" className="font-bold mb-2">
                        Nama Tim
                    </label>
                    <div className="join">
                        <input
                            id="team_name"
                            type="text"
                            name="team_name"
                            value={data.team_name}
                            autoComplete="team_name"
                            isfocused="true"
                            onChange={(e) =>
                                setData("team_name", e.target.value)
                            }
                            className="input input-bordered join-item z-[1]"
                        />
                        <div className="tooltip" data-tip="Buat nama tim">
                            <label
                                className="btn btn-square join-item"
                                onClick={() =>
                                    setData("team_name", useRandomTeamName())
                                }
                            >
                                <ArrowPathIcon className="h-6 w-6" />
                            </label>
                        </div>
                    </div>
                    <p className="mt-2 text-error">{errors.team_name}</p>
                </div>
                <button
                    className="btn btn-primary w-full mb-2"
                    disabled={processing}
                >
                    Buat Tim
                </button>
            </form>
        </ParticipantLayout>
    );
}

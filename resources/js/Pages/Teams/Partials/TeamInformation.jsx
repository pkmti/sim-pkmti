import ModalBody from "@/Components/ModalBody";
import ModalButton from "@/Components/ModalButton";
import { useParam, useRandomString } from "@/utils";
import {
    ArrowLeftEndOnRectangleIcon,
    ArrowPathIcon,
    ClipboardDocumentIcon,
    PencilIcon,
    PowerIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TeamInformation({ user, team, lecturers }) {
    const [wasCopied, setWasCopied] = useState(false);

    const { data, setData, patch, processing, errors } = useForm({
        team_name: team.team_name,
        token: team.token,
        lecturer_id: team.lecturer_id,
    });

    const updateTeam = (e) => {
        e.preventDefault();

        patch(route("teams.update", useParam(1)));
    };
    return (
        <>
            <div className="lg:w-96">
                <UserGroupIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs mb-4">INFORMASI TIM</h3>
                <form onSubmit={updateTeam} id="team_information_form">
                    {/* Team name */}
                    <div className="form-control my-2">
                        <label htmlFor="team_name" className="font-bold mb-2">
                            Nama Tim
                        </label>
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
                            className="input input-bordered w-full"
                        />

                        <p className="mt-2 text-error">{errors.team_name}</p>
                    </div>

                    <div className="form-control my-2">
                        <label htmlFor="title" className="font-bold mb-2">
                            Dosen Pembimbing
                        </label>
                        <select
                            id="lecturer_id"
                            name="lecturer_id"
                            className="select select-bordered w-full text-base"
                            value={data.lecturer_id || ""}
                            onChange={(e) =>
                                setData("lecturer_id", e.target.value)
                            }
                        >
                            <option value="">Belum ada</option>
                            {lecturers.map((lecturer, i) => (
                                <option key={i} value={lecturer.id}>
                                    {lecturer.name}
                                </option>
                            ))}
                        </select>

                        <p className="mt-2 text-error">{errors.lecturer}</p>
                    </div>

                    {/* Copy link */}
                    <div className="form-control my-2">
                        <label
                            htmlFor="invitation_link"
                            className="font-bold mb-2"
                        >
                            Token
                        </label>
                        <div className="join">
                            <input
                                id="invitation_link"
                                type="text"
                                name="invitation_link"
                                value={data.token}
                                className="input input-bordered join-item z-[1] w-full"
                                readOnly
                            />
                            <div
                                className="tooltip"
                                data-tip={
                                    !wasCopied ? "Salin tautan" : "Tersalin"
                                }
                            >
                                <label
                                    className="btn btn-square join-item"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            location.origin +
                                                "/teams/" +
                                                data.token +
                                                "/join"
                                        );
                                        setWasCopied(true);
                                        setTimeout(
                                            () => setWasCopied(false),
                                            1000
                                        );
                                    }}
                                >
                                    <ClipboardDocumentIcon className="h-6 w-6" />
                                </label>
                            </div>
                        </div>
                    </div>
                </form>

                {(user.id === team.leader_id || user.role === "admin") && (
                    <>
                        <ModalButton modalId="edit_team_modal">
                            <button className="btn btn-warning mb-2 w-full">
                                <PencilIcon className="h-6 w-6" />
                                Simpan Perubahan
                            </button>
                        </ModalButton>
                        <ModalButton modalId="regenerate_token_modal">
                            <button className="btn btn-warning mb-2 w-full">
                                <ArrowPathIcon className="h-6 w-6" />
                                Buat Token Baru
                            </button>
                        </ModalButton>
                    </>
                )}

                <ModalButton modalId="leave_team_modal">
                    <button className="btn btn-error mb-2 w-full">
                        <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
                        Keluar Tim
                    </button>
                </ModalButton>

                {(user.id === team.leader_id || user.role === "admin") && (
                    <ModalButton modalId="destroy_team_modal">
                        <button className="btn btn-error mb-2 w-full">
                            <PowerIcon className="h-6 w-6" /> Bubarkan Tim
                        </button>
                    </ModalButton>
                )}
            </div>

            {/* Modal */}
            {(user.id === team.leader_id || user.role === "admin") && (
                <>
                    <ModalBody
                        headerText="Edit Tim"
                        id="edit_team_modal"
                        actionButton={
                            <button
                                className="btn btn-warning mb-2 w-full"
                                disabled={processing}
                                form="team_information_form"
                                type="submit"
                            >
                                Simpan Perubahan
                            </button>
                        }
                    >
                        Apakah Anda yakin menyimpan perubahan informasi tim?
                    </ModalBody>

                    <ModalBody
                        headerText="Ganti Token"
                        id="regenerate_token_modal"
                        actionButton={
                            <button
                                className="btn btn-warning mb-2 w-full"
                                disabled={processing}
                                onClick={() =>
                                    setData("token", useRandomString(8))
                                }
                                form="team_information_form"
                                type="submit"
                            >
                                Buat Token
                            </button>
                        }
                    >
                        Apakah Anda yakin membuat token tim baru?
                    </ModalBody>
                </>
            )}

            <ModalBody
                headerText="Keluar Tim"
                id="leave_team_modal"
                actionButton={
                    <Link
                        as="button"
                        method="delete"
                        className="btn btn-error mb-2 w-full"
                        href={route("teams.leave", useParam(1))}
                    >
                        Keluar Tim
                    </Link>
                }
            >
                Apakah Anda yakin untuk keluar dari tim {team.team_name}?
            </ModalBody>

            {(user.id === team.leader_id || user.role === "admin") && (
                <ModalBody
                    headerText="Bubarkan Tim"
                    id="destroy_team_modal"
                    actionButton={
                        <Link
                            as="button"
                            method="delete"
                            className="btn btn-error mb-2 w-full"
                            href={route("teams.destroy", useParam(1))}
                        >
                            Bubarkan Tim
                        </Link>
                    }
                >
                    Apakah Anda yakin membubarkan tim {team.team_name}?
                </ModalBody>
            )}
        </>
    );
}

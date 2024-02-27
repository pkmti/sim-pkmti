import { useRandomString } from "@/utils";
import {
    ArrowPathIcon,
    ClipboardDocumentIcon,
    PencilIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function TeamInformation({ team }) {
    const { data, setData, patch, processing, errors, recentlySuccessful } =
        useForm({
            team_name: team.team_name,
            token: team.token,
        });

    const updateProfile = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };
    return (
        <>
            {recentlySuccessful && (
                <Toast
                    id="update_password_success"
                    content="Perubahan profil berhasil disimpan."
                />
            )}
            <div>
                <UserGroupIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs">INFORMASI TIM</h3>
                <form onSubmit={updateProfile}>
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
                            className="input input-bordered"
                        />

                        <p className="mt-2 text-error">{errors.team_name}</p>
                    </div>

                    {/* Team token */}
                    <div className="form-control my-2">
                        <label htmlFor="token" className="font-bold mb-2">
                            Token
                        </label>
                        <div className="join">
                            <input
                                id="token"
                                type="text"
                                name="token"
                                value={data.token}
                                autoComplete="token"
                                isfocused="true"
                                className="input input-bordered join-item z-[1]"
                                readOnly
                            />
                            <div className="tooltip" data-tip="Perbarui token">
                                <label
                                    className="btn btn-square join-item"
                                    onClick={() =>
                                        setData("token", useRandomString(8))
                                    }
                                >
                                    <ArrowPathIcon className="h-6 w-6" />
                                </label>
                            </div>
                        </div>

                        <p className="mt-2 text-error">{errors.token}</p>
                    </div>

                    {/* Copy link */}
                    <div className="form-control my-2">
                        <label
                            htmlFor="invitation_link"
                            className="font-bold mb-2"
                        >
                            Tautan undangan
                        </label>
                        <div className="join">
                            <input
                                id="invitation_link"
                                type="text"
                                name="invitation_link"
                                value={location.host + "/teams/" + data.token}
                                className="input input-bordered join-item z-[1]"
                                readOnly
                            />
                            <div className="tooltip" data-tip="Salin tautan">
                                <label
                                    className="btn btn-square join-item"
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            location.host +
                                                "/teams/" +
                                                data.token
                                        )
                                    }
                                >
                                    <ClipboardDocumentIcon className="h-6 w-6" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        className="btn btn-warning mb-2 w-full"
                        disabled={processing}
                        type="submit"
                    >
                        <PencilIcon className="h-6 w-6" />
                        Edit Tim
                    </button>
                </form>
            </div>
        </>
    );
}

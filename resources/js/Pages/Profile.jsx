import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { EyeIcon, EyeSlashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useForm, router } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard({ auth }) {
    const user = auth.user;
    const { data, setData, patch, processing, errors, reset, cancel } = useForm(
        {
            name: user.name,
            email: user.email,
            nim: user.nim,
            phone: user.phone,
            line_id: user.line_id,
            password: "",
            password_confirmation: "",
        }
    );

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
        router.get(route("profile.edit"));
    };

    return (
        <ParticipantLayout user={user} title="Beranda">
            <form onSubmit={submit}>
                {/* Input name */}
                <div className="form-control my-2">
                    <label htmlFor="name" className="font-bold mb-2">
                        Nama Lengkap
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        isfocused="true"
                        onChange={(e) => setData("name", e.target.value)}
                        className="input input-bordered"
                    />

                    <p className="mt-2 text-error">{errors.name}</p>
                </div>

                {/* Input NIM */}
                <div className="form-control my-2">
                    <label htmlFor="nim" className="font-bold mb-2">
                        NIM
                    </label>
                    <input
                        id="nim"
                        type="text"
                        name="nim"
                        value={data.nim}
                        autoComplete="nim"
                        isfocused="true"
                        onChange={(e) => setData("nim", e.target.value)}
                        className="input input-bordered"
                    />

                    <p className="mt-2 text-error">{errors.nim}</p>
                </div>

                {/* Input email */}
                <div className="form-control my-2">
                    <label htmlFor="email" className="font-bold mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        isfocused="true"
                        onChange={(e) => setData("email", e.target.value)}
                        className="input input-bordered"
                    />

                    <p className="mt-2 text-error">{errors.email}</p>
                </div>

                {/* Input phone */}
                <div className="form-control my-2">
                    <label htmlFor="phone" className="font-bold mb-2">
                        Telepon
                    </label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        autoComplete="phone"
                        isfocused="true"
                        onChange={(e) => setData("phone", e.target.value)}
                        className="input input-bordered"
                    />

                    <p className="mt-2 text-error">{errors.phone}</p>
                </div>

                {/* Input Line ID */}
                <div className="form-control my-2">
                    <label htmlFor="line_id" className="font-bold mb-2">
                        ID Line
                    </label>
                    <input
                        id="line_id"
                        type="text"
                        name="line_id"
                        value={data.line_id}
                        autoComplete="line_id"
                        isfocused="true"
                        onChange={(e) => setData("line_id", e.target.value)}
                        className="input input-bordered"
                    />

                    <p className="mt-2 text-error">{errors.line_id}</p>
                </div>

                {/* Input password */}
                <div className="form-control my-2">
                    <label htmlFor="password" className="font-bold mb-2">
                        Password
                    </label>
                    <div className="join">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="input input-bordered w-full join-item"
                        />
                        <label className="btn btn-square join-item swap">
                            <input
                                type="checkbox"
                                onClick={() => {
                                    let x = document.getElementById("password");
                                    x.type =
                                        x.type === "password"
                                            ? "text"
                                            : "password";
                                }}
                            />
                            <EyeSlashIcon className="h-6 w-6 swap-on" />
                            <EyeIcon className="h-6 w-6 swap-off" />
                        </label>
                    </div>

                    <p className="mt-2 text-error">{errors.password}</p>
                </div>

                {/* Input confirmation password */}
                <div className="form-control my-2">
                    <label
                        htmlFor="password_confirmation"
                        className="font-bold mb-2"
                    >
                        Konfirmasi Password
                    </label>
                    <div className="join">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            className="input input-bordered w-full join-item"
                        />
                        <label className="btn btn-square join-item swap">
                            <input
                                type="checkbox"
                                onClick={() => {
                                    let x = document.getElementBxId(
                                        "password_confirmation"
                                    );
                                    x.type =
                                        x.type === "password"
                                            ? "text"
                                            : "password";
                                }}
                            />
                            <EyeSlashIcon className="h-6 w-6 swap-on" />
                            <EyeIcon className="h-6 w-6 swap-off" />
                        </label>
                    </div>

                    <p className="mt-2 text-error">
                        {errors.password_confirmation}
                    </p>
                </div>

                {/* The button to open modal */}
                <label
                    htmlFor="update_profile_confirmation"
                    className="btn btn-warning w-full mb-2"
                >
                    <PencilIcon className="h-6 w-6" /> Edit profil
                </label>

                {/* Put this part before </body> tag */}
                <input
                    type="checkbox"
                    id="update_profile_confirmation"
                    className="modal-toggle"
                />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Keluar</h3>
                        <p className="py-4">
                            Apakah Anda yakin untuk mengedit profil?
                        </p>
                        <div className="modal-action">
                            <button
                                className="btn btn-warning mb-2"
                                disabled={processing}
                                htmlFor="update_profile_confirmation"
                            >
                                Edit profil
                            </button>
                            <label
                                className="btn ms-1"
                                onClick={() => {
                                    cancel();
                                    reset();
                                }}
                                htmlFor="update_profile_confirmation"
                            >
                                Batal
                            </label>
                        </div>
                    </div>
                    <label
                        className="modal-backdrop"
                        htmlFor="update_profile_confirmation"
                    >
                        Batal
                    </label>
                </div>
            </form>
        </ParticipantLayout>
    );
}

import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { useForm } from "@inertiajs/react";

function Proofs() {
    return;
}

export default function Show({ auth, proofs, lecturers }) {
    const { user } = auth;

    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            proof_url: "",
            assistance_date: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("assistance-proofs.add", useParam(1)));
    };

    console.log(proofs);
    return (
        <ParticipantLayout title="Bukti Asistensi" user={user}>
            <form onSubmit={submit}>
                {/* Select PKM Lecturer */}
                <div className="form-control my-2">
                    <label htmlFor="title" className="font-bold mb-2">
                        Dosen Pembimbing
                    </label>
                    <select
                        id="lecturer_id"
                        name="lecturer_id"
                        className="select select-bordered w-full"
                        value={data.lecturer_id}
                        onChange={(e) => setData("lecturer_id", e.target.value)}
                    >
                        <option value="" disabled selected>
                            Pilih Dosen Pembimbing
                        </option>
                        {lecturers.map((lecturer, i) => (
                            <option key={i} value={lecturer.id}>
                                {lecturer.name}
                            </option>
                        ))}
                    </select>

                    <p className="mt-2 text-error">{errors.lecturer}</p>
                </div>
            </form>
        </ParticipantLayout>
    );
}

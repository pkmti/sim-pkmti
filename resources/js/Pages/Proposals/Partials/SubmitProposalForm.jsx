import ModalBody from "@/Components/ModalBody";
import ModalButton from "@/Components/ModalButton";
import { useParam } from "@/utils";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function SubmitProposalForm() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        scheme: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("proposals.create", useParam(1)));
    };

    const schemes = ["PKM-GFT", "PKM-K", "PKM-KC", "PKM-PI", "PKM-PM"];

    return (
        <>
            <div className="lg:w-1/2">
                <DocumentIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs mb-4">PROPOSAL</h3>
                <form onSubmit={submit} id="submit_proposal_form">
                    {/* Input Title */}
                    <div className="form-control my-2">
                        <label htmlFor="title" className="font-bold mb-2">
                            Judul
                        </label>
                        <textarea
                            id="title"
                            name="title"
                            value={data.title}
                            rows={2}
                            autoComplete="title"
                            isfocused="true"
                            onChange={(e) => setData("title", e.target.value)}
                            className="textarea textarea-bordered"
                        ></textarea>

                        <p className="mt-2 text-error">{errors.title}</p>
                    </div>

                    {/* Select PKM Scheme */}
                    <div className="form-control my-2">
                        <label htmlFor="title" className="font-bold mb-2">
                            Skema
                        </label>
                        <select
                            id="scheme"
                            name="scheme"
                            className="select select-bordered w-full text-base"
                            value={data.scheme}
                            onChange={(e) => setData("scheme", e.target.value)}
                        >
                            <option value="" disabled>
                                Pilih skema PKM
                            </option>
                            {schemes.map((scheme, i) => (
                                <option key={i} value={scheme}>
                                    {scheme}
                                </option>
                            ))}
                        </select>

                        <p className="mt-2 text-error">{errors.scheme}</p>
                    </div>
                </form>

                <ModalButton modalId="submit_proposal_modal">
                    <button className="btn btn-success w-full">
                        <DocumentArrowUpIcon className="h-6 w-6" />
                        Ajukan Proposal
                    </button>
                </ModalButton>
            </div>

            <ModalBody
                id="submit_proposal_modal"
                headerText="Simpan Proposal"
                actionButton={
                    <button
                        className="btn btn-success"
                        disabled={processing}
                        form="submit_proposal_form"
                    >
                        Ajukan Proposal
                    </button>
                }
            >
                Apakah Anda yakin untuk mengajukan proposal?
            </ModalBody>
        </>
    );
}

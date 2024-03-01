import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import {
    ArrowPathIcon,
    CheckIcon,
    ExclamationTriangleIcon,
    PaperAirplaneIcon,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router, useForm } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt } from "@/utils";

export default function ShowProposals({ auth, proposals, flash, errors }) {
    const { user } = auth;

    // id
    // title
    // team_id
    // team.team_name
    // scheme
    // draft_proposal_url
    // final_proposal_url
    // team.assistance_proofs[].proof_url
    // note
    // status
    // Select field that want to display
    const [selectedFields, setSelectedFields] = useState(
        proposals.map((proposal) => {
            return {
                id: proposal.id,
                title: proposal.title,
                team_id: proposal.team.id,
                team_name: proposal.team.team_name,
                scheme: proposal.scheme,
                draft_proposal_url: proposal.draft_proposal_url,
                final_proposal_url: proposal.final_proposal_url,
                note: proposal.note,
                status: proposal.status,
            };
        })
    );

    // Search
    const [filter, setFilter] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onSearch = (e) => {
        const value = e.target.value;

        setFilter((prevFilter) => ({
            ...prevFilter,
            global: { value, matchMode: FilterMatchMode.CONTAINS },
        }));
        console.log(filter);
    };

    // Edit
    const onRowEditComplete = (e) => {
        let _selectedFields = [...selectedFields];
        let { newData, index } = e;

        _selectedFields[index] = newData;
        const {
            team_id,
            title,
            scheme,
            draft_proposal_url,
            final_proposal_url,
            note,
        } = newData;
        const patchData = {
            title,
            scheme,
            draft_proposal_url,
            final_proposal_url,
            note,
        };
        router.patch(route("proposals.update", e.data.team_id), patchData);

        setSelectedFields(_selectedFields);
    };

    const textEditor = (rowData) => {
        return (
            <input
                type="text"
                className="input input-bordered input-sm"
                value={rowData.value}
                onChange={(e) => rowData.editorCallback(e.target.value)}
            />
        );
    };

    // status badge
    const statusBadge = (rowData) => {
        const status = rowData.status;
        const statuses = {
            approved: { style: "badge-success", content: "Diterima" },
            rejected: { style: "badge-error", content: "Ditolak" },
            pending: { style: "badge-warning", content: "Diperiksa" },
        };

        return (
            <div className={`badge p-3 ${statuses[status].style}`}>
                {statuses[status].content}
            </div>
        );
    };

    const rejectAction = (rowData) => {
        const { data, setData, patch, errors } = useForm({
            note: rowData.note,
        });

        const submit = (e) => {
            e.preventDefault();

            patch(route("proposals.reject", rowData.id));
        };

        return (
            <>
                <button
                    onClick={() =>
                        document
                            .getElementById(
                                "reject_proposal_modal" + rowData.id
                            )
                            .showModal()
                    }
                    className="btn btn-error btn-square btn-sm mx-1"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>
                <dialog
                    id={"reject_proposal_modal" + rowData.id}
                    className="modal"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Catatan</h3>
                        <form
                            onSubmit={submit}
                            id={"reject_proposal_form" + rowData.id}
                        >
                            <div className="form-control my-4">
                                <p className="py-4">
                                    Mohon berikan catatan kesalahan!
                                </p>

                                <textarea
                                    id="note"
                                    type="text"
                                    name="note"
                                    rows="3"
                                    value={data.note}
                                    onChange={(e) =>
                                        setData("note", e.target.value)
                                    }
                                    className="textarea textarea-bordered"
                                ></textarea>

                                {errors.note && (
                                    <p className="mt-2 text-error">
                                        {errors.note}
                                    </p>
                                )}
                            </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-error"
                                    form={"reject_proposal_form" + rowData.id}
                                >
                                    Tolak Proposal
                                </button>
                                <button className="btn">Batal</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </>
        );
    };

    return (
        <>
            {flash.msg && (
                <Toast
                    content={flash.msg}
                    key={useRandomInt()}
                    id="proposals_update_information"
                />
            )}

            <AdminLayout user={user} title="Admin">
                <div className="w-full justify-start">
                    <div className="w-full flex lg:gap-4 flex-col-reverse lg:flex-row justify-end lg:text-right mb-4">
                        <div className="lg:text-right">
                            <input
                                type="text"
                                className="input input-bordered join-item"
                                value={filter.global.value || ""}
                                onChange={onSearch}
                                placeholder="Cari"
                            />
                        </div>
                        <div className="flex gap-4">
                            <ExportXLSXButton exportedData={selectedFields} />
                            <button
                                className="btn btn-success btn-square"
                                onClick={() => window.location.reload()}
                            >
                                <ArrowPathIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    {!useIsObjectEmpty(errors) && (
                        <div className="alert alert-error mb-4" role="alert">
                            <ExclamationTriangleIcon className="h-6 w-6" />
                            <div>
                                <h3 className="font-bold">Kesalahan</h3>
                                {Object.keys(errors).map((key) => {
                                    return (
                                        <div className="text-xs" key={key}>
                                            {errors[key]}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <div className="overflow-x-auto">
                        <DataTable
                            value={selectedFields}
                            className="table table-zebra whitespace-nowrap"
                            filters={filter}
                            editMode="row"
                            dataKey="id"
                            onRowEditComplete={onRowEditComplete}
                            rowEditorInitIcon={
                                <div className="btn btn-warning btn-square btn-sm mx-1">
                                    <PencilIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorSaveIcon={
                                <div className="btn btn-success btn-square btn-sm mx-1">
                                    <CheckIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorCancelIcon={
                                <div className="btn btn-error btn-square btn-sm mx-1">
                                    <XMarkIcon className="h-4 w-4" />
                                </div>
                            }
                        >
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="title"
                                field="title"
                                header={<span className="me-2">Proposal</span>}
                                sortable
                            />
                            <Column
                                key="team_name"
                                field="team_name"
                                header={<span className="me-2">Nama Tim</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="scheme"
                                field="scheme"
                                header={<span className="me-2">Skema PKM</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="draft_proposal_url"
                                field="draft_proposal_url"
                                header="Proposal Draf"
                                body={(rowData) => {
                                    return (
                                        <a
                                            href={rowData.draft_proposal_url}
                                            className="btn btn-sm btn-square"
                                        >
                                            <PaperAirplaneIcon className="h-4 w-4" />
                                        </a>
                                    );
                                }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="final_proposal_url"
                                field="final_proposal_url"
                                header="Proposal Final"
                                body={(rowData) => {
                                    return (
                                        <a
                                            href={rowData.final_proposal_url}
                                            className="btn btn-sm btn-square"
                                        >
                                            <PaperAirplaneIcon className="h-4 w-4" />
                                        </a>
                                    );
                                }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="note"
                                field="note"
                                header={<span className="me-2">Note</span>}
                                sortable
                            />
                            <Column
                                body={statusBadge}
                                key="status"
                                field="status"
                                header={<span className="me-2">Status</span>}
                                sortable
                            />
                            <Column
                                header={"Setuju"}
                                body={(rowData) => {
                                    return (
                                        <Link
                                            as="button"
                                            method="patch"
                                            href={route(
                                                "proposals.accept",
                                                rowData.id
                                            )}
                                            className="btn btn-success btn-square btn-sm mx-1"
                                        >
                                            <CheckIcon className="h-4 w-4" />
                                        </Link>
                                    );
                                }}
                            />
                            <Column header={"Tolak"} body={rejectAction} />
                            <Column rowEditor={true} header={"Edit"} />
                            <Column
                                header={"Hapus"}
                                body={(rowData) => {
                                    return (
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={route(
                                                "proposals.destroy",
                                                rowData.team_id
                                            )}
                                            className="btn btn-error btn-square btn-sm mx-1"
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                        </Link>
                                    );
                                }}
                            />
                        </DataTable>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

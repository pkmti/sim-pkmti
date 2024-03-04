import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import {
    ArrowPathIcon,
    ArrowsRightLeftIcon,
    CheckIcon,
    EllipsisHorizontalIcon,
    ExclamationTriangleIcon,
    PencilIcon,
    TrashIcon,
    UserMinusIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt } from "@/utils";
import ModalButton from "@/Components/ModalButton";
import ModalBody from "@/Components/ModalBody";

export default function ShowTeams({ auth, teams, flash, errors }) {
    const { user } = auth;

    const randomKey = useRandomInt();
    const [deletedTeam, setDeletedTeam] = useState({
        id: 0,
        team_name: "PKM Team",
    });

    // Select field that want to display
    const [selectedFields, setSelectedFields] = useState(
        teams.map((team) => {
            return {
                id: team.id,
                team_name: team.team_name,
                leader_name: team.leader ? team.leader.name : "",
                leader_nim: team.leader ? team.leader.nim : "",
                lecturer: team.lecturer ? team.lecturer.name : "",
                members: team.members,
                token: team.token,
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
    };

    // Edit
    const onRowEditComplete = (e) => {
        let _selectedFields = [...selectedFields];
        let { newData, index } = e;

        _selectedFields[index] = newData;
        const { id, team_name, token } = newData;
        const patchData = {
            team_name,
            token,
        };
        router.patch(route("teams.update", e.data.id), patchData);

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

    const membersDetail = (rowData) => {
        const [kickedMember, setKickedMember] = useState({
            id: 0,
            name: "John Doe",
        });

        const [changedLeader, setChangedLeader] = useState({
            id: 0,
            name: "John Doe",
        });

        return (
            <>
                <ModalButton modalId={"members_detail_modal" + rowData.id}>
                    <button className="btn btn-square btn-sm">
                        <EllipsisHorizontalIcon className="h-4 w-4" />
                    </button>
                </ModalButton>

                <div className="text-left">
                    <ModalBody
                        id={"members_detail_modal" + rowData.id}
                        headerText="Anggota Tim"
                    >
                        {rowData.members.map((member, i) => {
                            return (
                                <div
                                    key={member.id}
                                    className="flex gap-2 mb-2 items-center"
                                >
                                    <span className="font-bold hidden md:inline">
                                        {member.nim}
                                    </span>
                                    <span className="font-bold md:hidden inline">
                                        {member.nim.substring(0, 2)}-
                                        {member.nim.substring(7, 10)}
                                    </span>
                                    <span>{member.name}</span>

                                    <ModalButton
                                        modalId={
                                            "kick_member_modal" + rowData.id
                                        }
                                    >
                                        <button
                                            className="btn btn-xs btn-square btn-error"
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        "members_detail_modal" +
                                                            rowData.id
                                                    )
                                                    .close();
                                                setKickedMember(
                                                    rowData.members[i]
                                                );
                                            }}
                                        >
                                            <UserMinusIcon className="h-4 w-4" />
                                        </button>
                                    </ModalButton>

                                    {member.nim !== rowData.leader_nim && (
                                        <ModalButton
                                            modalId={
                                                "change_leader_modal" +
                                                rowData.id
                                            }
                                        >
                                            <button
                                                className="btn btn-xs btn-square btn-warning"
                                                onClick={() => {
                                                    document
                                                        .getElementById(
                                                            "members_detail_modal" +
                                                                rowData.id
                                                        )
                                                        .close();
                                                    setChangedLeader(
                                                        rowData.members[i]
                                                    );
                                                }}
                                            >
                                                <ArrowsRightLeftIcon className="h-4 w-4" />
                                            </button>
                                        </ModalButton>
                                    )}
                                </div>
                            );
                        })}
                    </ModalBody>
                </div>

                {/* Kick Member */}
                <div className="text-left">
                    <ModalBody
                        headerText="Keluarkan Anggota"
                        id={"kick_member_modal" + rowData.id}
                        actionButton={
                            <Link
                                as="button"
                                method="delete"
                                className="btn btn-error"
                                href={route("teams.kick", [
                                    rowData.id,
                                    kickedMember.id,
                                ])}
                            >
                                Keluarkan
                            </Link>
                        }
                    >
                        Apakah Anda yakin mengeluarkan {kickedMember.name}?
                    </ModalBody>
                </div>

                {/* Change Leader */}
                <div className="text-left">
                    <ModalBody
                        headerText="Ganti Ketua"
                        id={"change_leader_modal" + rowData.id}
                        actionButton={
                            <Link
                                as="button"
                                className="btn btn-warning"
                                method="patch"
                                href={route("teams.changeLeader", [
                                    rowData.id,
                                    changedLeader.id,
                                ])}
                            >
                                Ganti
                            </Link>
                        }
                    >
                        Apakah Anda yakin mengganti {changedLeader.name} menjadi
                        ketua tim?
                    </ModalBody>
                </div>
            </>
        );
    };

    return (
        <>
            {flash.msg && (
                <Toast
                    content={flash.msg}
                    key={useRandomInt()}
                    id="teams_update_information"
                />
            )}

            <AdminLayout user={user} title="Admin">
                <div className="w-full justify-start">
                    <div className="w-full flex lg:gap-4 flex-col-reverse lg:flex-row justify-end lg:text-right mb-4">
                        <div className="lg:text-right">
                            <input
                                autoComplete="search"
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
                            className="table table-zebra"
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
                                <div className="btn btn-warning btn-square btn-sm mx-1">
                                    <CheckIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorCancelIcon={
                                <div className="btn btn-square btn-sm mx-1">
                                    <XMarkIcon className="h-4 w-4" />
                                </div>
                            }
                        >
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="team_name"
                                field="team_name"
                                header={<span className="me-2">Nama Tim</span>}
                                sortable
                            />
                            <Column
                                key="leader_nim"
                                field="leader_nim"
                                header={<span className="me-2">NIM Ketua</span>}
                                sortable
                            />
                            <Column
                                key="leader_name"
                                field="leader_name"
                                header={
                                    <span className="me-2">Nama Ketua</span>
                                }
                                sortable
                            />
                            <Column
                                key="lecturer"
                                field="lecturer"
                                header={
                                    <span className="me-2">
                                        Dosen Pembimbing
                                    </span>
                                }
                                sortable
                            />
                            <Column
                                key="members"
                                field="members"
                                body={membersDetail}
                                className="text-center"
                                header={<span className="me-2">Anggota</span>}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="token"
                                field="token"
                                header={<span className="me-2">Token</span>}
                            />
                            <Column
                                rowEditor={true}
                                header={"Edit"}
                                className="whitespace-nowrap"
                                unstyled
                            />
                            <Column
                                header={"Hapus"}
                                body={(rowData) => {
                                    return (
                                        <ModalButton
                                            modalId={
                                                "delete_team_modal" + randomKey
                                            }
                                        >
                                            <button
                                                onClick={() => {
                                                    setDeletedTeam(rowData);
                                                }}
                                                className="btn btn-error btn-square btn-sm mx-1"
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                            </button>
                                        </ModalButton>
                                    );
                                }}
                            />
                        </DataTable>
                    </div>
                </div>
            </AdminLayout>

            <ModalBody
                headerText="Hapus Tim"
                id={"delete_team_modal" + randomKey}
                actionButton={
                    <Link
                        as="button"
                        method="delete"
                        href={route("teams.destroy", deletedTeam.id)}
                        className="btn btn-error"
                    >
                        Hapus
                    </Link>
                }
            >
                Apakah Anda yakin menghapus tim {deletedTeam.team_name}?
            </ModalBody>
        </>
    );
}

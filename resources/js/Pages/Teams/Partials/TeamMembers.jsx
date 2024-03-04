import ModalBody from "@/Components/ModalBody";
import ModalButton from "@/Components/ModalButton";
import { useParam, useRandomInt } from "@/utils";
import {
    UserMinusIcon,
    ArrowsRightLeftIcon,
    UserIcon,
    TagIcon,
    CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function TeamMembers({ user, team }) {
    team.members.sort((a) => (a.id === team.leader_id ? -1 : 0));

    const [selectedMember, setSelectedMember] = useState({ id: 0 });
    const randomKey = useRandomInt();

    return (
        <>
            <div>
                <h3 className="font-bold text-xs mb-4">ANGGOTA TIM</h3>
                <div className="flex gap-2 mb-4">
                    <UserIcon className="h-6 w-6" />
                    <span className="font-bold">{team.members.length} / 5</span>
                </div>
                <div className="overflow-x-auto lg:max-w-96">
                    <table className="table table-zebra mb-4 whitespace-nowrap">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Angkatan</th>
                                <th>Jabatan</th>
                                <th>Email</th>
                                <th>Telepon</th>
                                <th>ID Line</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.members.map((member, i) => {
                                return (
                                    <tr key={member.id}>
                                        <th>{i + 1}</th>
                                        <td>{member.nim}</td>
                                        <td>{member.name}</td>
                                        <td>20{member.nim.substring(0, 2)}</td>
                                        <td className="flex">
                                            {member.id === user.id && (
                                                <div
                                                    className="tooltip"
                                                    data-tip="Saya"
                                                >
                                                    <TagIcon className="h-5 w-5 me-2" />
                                                </div>
                                            )}
                                            {(team.leader_id === member.id && (
                                                <>
                                                    <div
                                                        className="tooltip"
                                                        data-tip="Ketua"
                                                    >
                                                        <CodeBracketSquareIcon className="h-5 w-5 me-2" />
                                                    </div>
                                                    Ketua
                                                </>
                                            )) ||
                                                "Anggota"}
                                        </td>
                                        <td>{member.email}</td>
                                        <td>{member.phone}</td>
                                        <td>{member.line_id}</td>
                                        <td className="flex gap-1">
                                            {user.id !== member.id &&
                                                (user.role === "admin" ||
                                                    user.id ===
                                                        team.leader_id) &&
                                                team.leader_id !==
                                                    member.id && (
                                                    <>
                                                        <ModalButton
                                                            modalId={
                                                                "kick_member_modal" +
                                                                randomKey
                                                            }
                                                        >
                                                            <div
                                                                className="tooltip"
                                                                data-tip="Keluarkan"
                                                            >
                                                                <button
                                                                    className="btn btn-square btn-error btn-sm"
                                                                    onClick={() =>
                                                                        setSelectedMember(
                                                                            member
                                                                        )
                                                                    }
                                                                >
                                                                    <UserMinusIcon className="h-5 w-5" />
                                                                </button>
                                                            </div>
                                                        </ModalButton>
                                                        <ModalButton
                                                            modalId={
                                                                "change_leader_modal" +
                                                                randomKey
                                                            }
                                                        >
                                                            <div
                                                                className="tooltip"
                                                                data-tip="Keluarkan"
                                                            >
                                                                <button
                                                                    className="btn btn-square btn-warning btn-sm"
                                                                    onClick={() =>
                                                                        setSelectedMember(
                                                                            member
                                                                        )
                                                                    }
                                                                >
                                                                    <ArrowsRightLeftIcon className="h-5 w-5" />
                                                                </button>
                                                            </div>
                                                        </ModalButton>
                                                    </>
                                                )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <ModalBody
                headerText="Keluarkan Anggota"
                id={"kick_member_modal" + randomKey}
                actionButton={
                    <Link
                        as="button"
                        method="delete"
                        className="btn btn-error"
                        href={route("teams.kick", [
                            useParam(1),
                            selectedMember.id,
                        ])}
                    >
                        Keluarkan
                    </Link>
                }
            >
                Apakah Anda yakin mengeluarkan {selectedMember.name}?
            </ModalBody>

            <ModalBody
                headerText="Ganti Ketua"
                id={"change_leader_modal" + randomKey}
                actionButton={
                    <Link
                        as="button"
                        method="patch"
                        className="btn btn-warning"
                        href={route("teams.changeLeader", [
                            useParam(1),
                            selectedMember.id,
                        ])}
                    >
                        Ganti
                    </Link>
                }
            >
                Apakah Anda yakin mengganti {selectedMember.name} menjadi ketua
                tim?
            </ModalBody>
        </>
    );
}

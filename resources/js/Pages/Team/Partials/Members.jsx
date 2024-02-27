import { FaceFrownIcon, UserMinusIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

export default function Members({ members }) {
    console.log({ members });
    return (
        <>
            <div className="overflow-x-auto">
                <h3 className="font-bold text-xs">Anggota Tim</h3>
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Angkatan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, i) => {
                            return (
                                <tr key={member.id}>
                                    <th>{i + 1}</th>
                                    <td>{member.nim}</td>
                                    <td>{member.name}</td>
                                    <td>20{member.nim.substring(0, 2)}</td>
                                    <td>
                                        <div
                                            className="tooltip"
                                            data-tip="Keluarkan anggota"
                                        >
                                            <Link
                                                as="button"
                                                className="btn btn-square btn-error btn-sm"
                                                href={route(
                                                    "team.kick",
                                                    member.id
                                                )}
                                            >
                                                <UserMinusIcon className="h-5 w-5 text-neutral" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

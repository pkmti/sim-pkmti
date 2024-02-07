import ParticipantLayout from "@/Layouts/ParticipantLayout";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useReducer, useState } from "react";

const DATA = [
    {
        name: "Tanner",
        nim: "2205551078",
    },
    {
        name: "Bay",
        nim: "2205551070",
    },
];

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("name", {
        header: () => "Nama",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nim", {
        header: () => "NIM",
        cell: (info) => info.getValue(),
    }),
];

export default function Team({ auth, teams }) {
    const [data, setData] = useState(() => [...DATA]);
    const rerender = useReducer(() => ({}), {})[1];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(table.getHeaderGroups());
    return (
        <ParticipantLayout user={auth.user} title="Tim">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ParticipantLayout>
    );
}

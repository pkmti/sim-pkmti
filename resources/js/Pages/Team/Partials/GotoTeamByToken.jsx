import { UserGroupIcon } from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";

export default function GotoTeamByToken() {
    const { data, setData } = useForm({
        token: "",
    });

    return (
        <>
            <form>
                <UserGroupIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs">GABUNG TIM</h3>
                <div className="form-control my-4">
                    <label htmlFor="token" className="font-bold mb-2">
                        Token Tim
                    </label>
                    <div className="join">
                        <input
                            id="token"
                            type="text"
                            name="token"
                            value={data.token}
                            autoComplete="token"
                            isfocused="true"
                            onChange={(e) => setData("token", e.target.value)}
                            className="input input-bordered join-item z-[1] w-full"
                        />
                    </div>
                </div>

                <Link
                    as="button"
                    href={route("team.index", data.token)}
                    className="btn btn-primary w-full mb-2"
                >
                    Gabung Tim
                </Link>
            </form>
        </>
    );
}

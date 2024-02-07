import {
    ArrowLeftEndOnRectangleIcon,
    Bars3Icon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

export default function Sidebar({ user, navigations, children }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <div className="w-full flex justify-end">
                    <label
                        htmlFor="sidebar"
                        className="btn btn-square m-4 z-50 fixed drawer-button lg:hidden"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </label>
                </div>
                <div className="container flex justify-center p-10">
                    {children}
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="sidebar"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                    <img
                        src="/images/logo.png"
                        className="h-32 w-32 mx-auto my-4"
                    />

                    <ul className="font-bold">
                        {navigations.map((navigation, i) => (
                            <li key={i} className="my-2">
                                <a>
                                    {navigation.icon} {navigation.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="divider"></div>

                    <ul className="font-bold">
                        <li className="my-2">
                            <a>
                                <UserIcon className="h-6 w-6" />
                                {user.nim}
                            </a>
                        </li>
                        <li className="my-2">
                            <Link method="post" href={route("logout")} as="a">
                                <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
                                Keluar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
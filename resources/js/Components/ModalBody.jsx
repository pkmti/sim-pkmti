import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ModalBody({ id, headerText, children, actionButton }) {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{headerText}</h3>
                <div className="py-4">{children}</div>
                <div className="modal-action">
                    <form method="dialog">
                        <div
                            className="inline-block"
                            onClick={() => {
                                document.getElementById(id).close();
                            }}
                        >
                            {actionButton}
                        </div>
                        <button className="btn ms-1">Batal</button>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

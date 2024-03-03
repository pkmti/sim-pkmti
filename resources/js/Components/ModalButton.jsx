export default function ModalButton({ modalId, children }) {
    return (
        <div
            onClick={() => {
                document.getElementById(modalId).showModal();
            }}
        >
            {children}
        </div>
    );
}

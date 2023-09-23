import { FC, useEffect, useRef } from 'react';

type modalProps = {
    symbol: number;
    active: boolean;
    resetBoard: () => void;
};

const Modal: FC<modalProps> = ({ symbol, active, resetBoard }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (active) {
            modalRef.current?.showModal();
        }
    }, [active]);
    return (
        <dialog className="modal" ref={modalRef}>
            <p>
                {symbol === 0 ? (
                    <>
                        <span className="">Circle</span> Win!!!
                    </>
                ) : symbol === 1 ? (
                    <>
                        <span className="">Cross</span> Win!!!
                    </>
                ) : (
                    <span>Tie</span>
                )}
            </p>
            <button onClick={resetBoard} className="close">
                Okey
            </button>
        </dialog>
    );
};

export default Modal;

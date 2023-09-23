import { FC } from 'react';

type ButtonProps = {
    handleChangeCurrSymbol: () => void;
    handleChangeArr(btnIndex: number): void;
    setCurrBtnIdx: React.Dispatch<React.SetStateAction<number | null>>;
    item: number;
    btnIndex: number;
    disabled: boolean;
};

const Button: FC<ButtonProps> = ({
    handleChangeCurrSymbol,
    handleChangeArr,
    setCurrBtnIdx,
    disabled,
    item,
    btnIndex,
}) => {
    const handleClick = () => {
        handleChangeArr(btnIndex);
        handleChangeCurrSymbol();
        setCurrBtnIdx(btnIndex);
    };

    return (
        <div className="wrapper">
            <button onClick={handleClick} disabled={disabled} className="button"></button>
            {disabled && (
                <>
                    {item === 0 ? (
                        <div className="circle"></div>
                    ) : item === 1 ? (
                        <div className="cross">
                            <div className="first"></div>
                            <div className="last"></div>
                        </div>
                    ) : null}
                </>
            )}
        </div>
    );
};

export default Button;

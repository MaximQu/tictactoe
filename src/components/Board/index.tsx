import { FC, useEffect, useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';

const Board: FC = () => {
    const [symbol, setSymbol] = useState<number>(1);
    const [active, setActive] = useState<boolean>(false);
    const [currBtnIdx, setCurrBtnIdx] = useState<null | number>(null);

    const [btnsArr, setBtnsArr] = useState([
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
    ]);

    const handleChangeCurrSymbol = () => {
        setSymbol((prevSymbol) => (prevSymbol === 1 ? 0 : 1));
    };

    const showGameResult = () => {
        handleChangeCurrSymbol();
        setActive(true);
    };

    const calcResult = (btnIndex: number) => {
        const currRowIdx: number = Math.floor(btnIndex / 3);
        const clickedBtnIdx: number = btnIndex - currRowIdx * 3;

        // horizontal
        if (btnsArr[currRowIdx].every((item) => item === btnsArr[currRowIdx][0])) {
            return showGameResult();
        }

        // vertical
        if (btnsArr.every((item) => item[clickedBtnIdx] === btnsArr[0][clickedBtnIdx])) {
            return showGameResult();
        }

        // diagonal
        if (
            (btnsArr[1][1] >= 0 &&
                btnsArr[1][1] === btnsArr[0][0] &&
                btnsArr[1][1] === btnsArr[2][2]) ||
            (btnsArr[1][1] >= 0 &&
                btnsArr[1][1] === btnsArr[0][2] &&
                btnsArr[1][1] === btnsArr[2][0])
        ) {
            return showGameResult();
        }
        if (btnsArr.flat().every((item) => item !== -1)) {
            setSymbol(2);
            setActive(true);
        }
    };

    const handleChangeArr = (btnIndex: number) => {
        setBtnsArr((prev) => {
            return prev.map((item, index) => {
                const sum: number = Math.floor(btnIndex / 3);
                if (index !== sum) return item;

                return item.map((el, elIndex) => {
                    const clickedBtnIdx: number = btnIndex - index * 3;
                    if (clickedBtnIdx === elIndex) return symbol;
                    return el;
                });
            });
        });
    };
    useEffect(() => {
        if (currBtnIdx !== null) {
            calcResult(currBtnIdx);
        }
    }, [btnsArr, currBtnIdx]);

    const resetBoard = () => {
        setSymbol(1);
        setActive(false);
        setCurrBtnIdx(null);
        setBtnsArr([
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ]);
    };

    return (
        <>
            <div className="board">
                {btnsArr.flat().map((item, index) => (
                    <Button
                        key={index}
                        btnIndex={index}
                        item={item}
                        setCurrBtnIdx={setCurrBtnIdx}
                        disabled={item !== -1}
                        handleChangeArr={handleChangeArr}
                        handleChangeCurrSymbol={handleChangeCurrSymbol}
                    />
                ))}
            </div>
            <button className="reset" onClick={resetBoard}>
                Reset game
            </button>
            {active && <Modal symbol={symbol} active={active} resetBoard={resetBoard} />}
        </>
    );
};

export default Board;

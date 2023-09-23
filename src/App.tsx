import Board from './components/Board';

const App = () => {
    return (
        <div className="main container">
            <h1 className="title">✌️Tic Tac Toe✌️</h1>
            <p className="rules">
                <span>
                    <strong>Rules for Tic-Tac-Toe</strong>
                </span>
                Players take turns putting their marks in empty squares. The first player to get 3
                of her marks in a row (up, down, across, or diagonally) is the winner. When all 9
                squares are full, the game is over. If no player has 3 marks in a row, the game ends
                in a tie.
            </p>
            <span className="pin">* cross always starts first</span>
            <Board />
        </div>
    );
};

export default App;

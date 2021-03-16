const GamePage = ({onChangePage}) => {
    const handleBackToHomePage = (pageName = "app") => {
        console.log("####: <GamePage />");
        onChangePage && onChangePage(pageName);
    };
    return (
        <div>
            This is Game Page!
            <button onClick={handleBackToHomePage}>Back to HomePage</button>
        </div>
    );
};

export default GamePage;
import "../../css/components/header.css";

function Header() {
    return (
        <>
        <header>
            <h2>Card Shuffler API</h2>
            <div className="menu-bar">
                <a href="#" className="menu-option">Home</a>
                <a href="#" className="menu-option">About</a>
            </div>
        </header>
        </>
    );
}

export default Header
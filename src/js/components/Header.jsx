import "../../css/components/header.css";

function Header() {
    return (
        <>
        <header>
            <h2>Card Shuffler API</h2>
            <div className="menu-bar">
                <a href="#" className="menu-option">Home</a>
                <a href="#" className="menu-option">About</a>
                <a href="#" className="menu-option">Docs</a>
                <a href="#" className="menu-option">Contact</a>
            </div>
        </header>
        </>
    );
}

export default Header
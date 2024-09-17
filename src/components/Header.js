import trollFace from "../images/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                alt="a meme face"
                src={trollFace}  
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    );
}

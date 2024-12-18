import "../styles/not_found.css"
import img_notfound from "../images/3.svg"

function App(){
    return (
        <div className="notfound__containt">
            <h1 className="notfound__title">Not Found</h1>
            <img src={img_notfound} alt="Image Not Found" className="notfound__img" />
        </div>
    )
}
export default App
import { testData } from "../test/test_data";
import AppCSS from "./App.module.css";
import Item from "./Item.js";

function App() {
    return (
        <div>
            {testData.map((x) => (
                <Item />
            ))}
        </div>
    );
}

export default App;

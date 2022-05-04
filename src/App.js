import {CarForm} from "./components";
import {Cars} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
        </div>
    );
};

export default App;

import {useForm} from "react-hook-form";
import {carService} from "../../services";


import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        resolver: (carValidator),
        mode: "onTouched"
    });

    useEffect(()  => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])
    const mySubmit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                const {data} = await carService.create(car);
                setNewCar(data);
            }

            reset()
        } catch (e) {
        }
    }

    const clearForm = () => {
        setCarForUpdate(false);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}}
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <br/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            {
                !!carForUpdate &&  <button onClick={clearForm}>clear form</button>
            }
        </form>
    );
};

export {CarForm};
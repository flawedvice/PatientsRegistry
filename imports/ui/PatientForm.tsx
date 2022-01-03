import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validateRut, cleanRut } from 'rutlib/lib';

import { Patient } from '../database/PatientsCollection';
import { State } from '../database/StatesCollection';


export type Fields = Patient;

type PatientFormProps = {
    onSubmit: (data: any) => void,
    states: State[]
};

export const PatientForm = (props: PatientFormProps) => {

    const [ cities, setCities ] = useState(['']);

    const onStateChange = (stateName: string) => {
            let currentState = props.states.filter( (state) => state.region === stateName);
            setCities(currentState[0].comunas);
    };

    // Register new patients
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isSubmitSuccessful}
    } = useForm<Fields>({
        defaultValues: {
            name: '',
            fatherSurname: '',
            motherSurname: '',
            rut: '',
        }
    });
    
    useEffect(() => {
        reset();
    }, [isSubmitSuccessful]);

    
    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
            <div className="form-group">
                <label htmlFor="name">Nombres</label>
                <input autoComplete='off' type="text" { ...register("name", { required: true }) } id="name" placeholder="Nombres"/>
                { errors.name && <span>Este campo es obligatorio.</span> }
            </div>
            <div className="form-group">
                <label htmlFor="fatherSurname">Apellido Paterno</label>
                <input autoComplete='off' type="text" { ...register("fatherSurname", { required: true }) } id="fatherSurname" placeholder="Apellido Paterno"/>
                { errors.fatherSurname && <span>Este campo es obligatorio.</span> }
            </div>
            <div className="form-group">
                <label htmlFor="motherSurname">Apellido Materno</label>
                <input autoComplete='off' type="text" { ...register("motherSurname", { required: true }) } id="motherSurname" placeholder="Apellido Materno"/>
                { errors.motherSurname && <span>Este campo es obligatorio.</span> }
            </div>

            <div className="form-group">
                <label htmlFor="rut">RUT</label>
                <input 
                    autoComplete='off' 
                    type="text" 
                    id="rut" 
                    placeholder="RUT" 
                    {
                        ...register('rut', {
                            required: true,
                            validate: rut => rut.length >= 8 ? validateRut(cleanRut(rut)) : false
                        }) 
                    } />
                { errors.rut && <span>RUT inválido.</span> }
            </div>
            
            <div className="form-group">
                <label htmlFor="state">Región</label>
                <select {
                    ...register("state", {
                        required: true,
                        validate: state => state !== 'default' ? true : false
                    }) 
                    }
                    id="state" 
                    onChange={(e) => onStateChange(e.target.value)} 
                    defaultValue='default'
                    >

                    <option value='default' disabled hidden>Selecciona una Región</option>
                    {
                        props.states.sort().map( state => <option key={state._id} value={state.region}>{state.region}</option>)
                    }
                </select>
                { errors.state && <span>Este campo es obligatorio.</span> }
            </div>
            <div className="form-group">
                <label htmlFor="city">Comuna</label>
                <select {
                    ...register("city", {
                        required: true,
                        validate: city => city !== 'default' ? true : false
                    }) 
                    } 
                    id="city" 
                    defaultValue='default'
                    >

                    <option value='default' disabled hidden>Selecciona una Comuna</option>
                    {
                        cities.sort().map( city => <option key={city}>{city}</option>)
                    }
                </select>
                { errors.city && <span>Este campo es obligatorio.</span> }
            </div>

            <button type="submit" style={{"margin": "2rem"}}>Crear Registro</button>
        </form>
    );
};
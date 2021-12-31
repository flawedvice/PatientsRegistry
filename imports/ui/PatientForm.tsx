import React from 'react';
import { useForm } from 'react-hook-form';
import { Patient } from '../database/PatientsCollection';


export type Fields = Patient;

type PatientFormProps = {
    onSubmit: (data: any) => void
};


export const PatientForm = (props: PatientFormProps) => {

    // Register new patients
    const { register, handleSubmit, formState: {errors} } = useForm<Fields>();

    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
            <div className="form-group">
                <label htmlFor="name">Nombres</label>
                <input type="text" { ...register("name", { required: true }) } id="name" placeholder="Nombres"/>
                { errors.name && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="fatherSurname">Apellido Paterno</label>
                <input type="text" { ...register("fatherSurname", { required: true }) } id="fatherSurname" placeholder="Apellido Paterno"/>
                { errors.fatherSurname && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="motherSurname">Apellido Materno</label>
                <input type="text" { ...register("motherSurname", { required: true }) } id="motherSurname" placeholder="Apellido Materno"/>
                { errors.motherSurname && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="rut">RUT</label>
                <input type="text" { ...register("rut", { required: true }) } id="rut" placeholder="RUT"/>
                { errors.rut && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="state">Región</label>
                <select { ...register("state") } id="state">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                { errors.state && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="city">Comuna</label>
                <select { ...register("city") } id="city">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                { errors.city && <span>Este campo es obligatorio</span> }
            </div>

            <button type="submit">Crear Registro</button>
        </form>
    );
};
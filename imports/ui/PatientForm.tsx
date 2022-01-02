import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Patient } from '../database/PatientsCollection';
import { validateRut, cleanRut } from 'rutlib/lib';


export type Fields = Patient;

type PatientFormProps = {
    onSubmit: (data: any) => void
};

export const PatientForm = (props: PatientFormProps) => {

    // Get states and cities
    
    // Register new patients
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isSubmitSuccessful}
    } = useForm<Fields>();
    
    useEffect(() => {
        reset();
    }, [isSubmitSuccessful]);

    
  /*
    const rutValidation: ( rut: string ) => boolean = (rut) => {
    //If rut is invalid, set error:
    if (!validateRut(rut)) {
      console.log('rut es inválido');
      return false;
    }
    else {
      console.log('rut válido! :D');
      return true;
    }
  };
  */

    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
            <div className="form-group">
                <label htmlFor="name">Nombres</label>
                <input autoComplete='off' type="text" { ...register("name", { required: true }) } id="name" placeholder="Nombres"/>
                { errors.name && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="fatherSurname">Apellido Paterno</label>
                <input autoComplete='off' type="text" { ...register("fatherSurname", { required: true }) } id="fatherSurname" placeholder="Apellido Paterno"/>
                { errors.fatherSurname && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="motherSurname">Apellido Materno</label>
                <input autoComplete='off' type="text" { ...register("motherSurname", { required: true }) } id="motherSurname" placeholder="Apellido Materno"/>
                { errors.motherSurname && <span>Este campo es obligatorio</span> }
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
                { errors.rut && <span>Rut no existente</span> }
            </div>
            
            <div className="form-group">
                <label htmlFor="state">Región</label>
                <select { ...register("state", { required: true }) } id="state">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                { errors.state && <span>Este campo es obligatorio</span> }
            </div>
            <div className="form-group">
                <label htmlFor="city">Comuna</label>
                <select { ...register("city", { required: true }) } id="city">
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
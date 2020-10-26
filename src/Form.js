import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BASE_API_URL } from './utils/constants';
import {useForm} from 'react-hook-form';
import "./Form.css";
import "./animate.css";

function Form() {
  // const [clickT, setClickT] = useState(0);  
  // const [times, setTimes] = useState(5);
  const [timesC, setTimesC] = useState(0);
  // const [codeT, setCodeT] = useState("");
  // const [error, setError] = useState("");
  const [listo, setListo] = useState(false);
  // const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  
  const {register, handleSubmit, errors} = useForm();
  
  //Estudiantes
  const [est0, setEst0] = useState({
    nombre: "",
    email: "",
    equipo: "",
    edad: 0,
    genero: "",
    universidad: "",
    telefono: "",
    pais: "",
    carrera: ""

  });
  const [est1, setEst1] = useState({
    nombre: "",
    email: "",
    equipo: "",
    edad: 0,
    genero: "",
    universidad: "",
    telefono: "",
    pais: "",
    carrera: ""
  });
  const [est2, setEst2] = useState({
    nombre: "",
    email: "",
    equipo: "",
    edad: 0,
    genero: "",
    universidad: "",
    telefono: "",
    pais: "",
    carrera: ""
  });
  const [est3, setEst3] = useState({
    nombre: "",
    email: "",
    equipo: "",
    edad: 0,
    genero: "",
    universidad: "",
    telefono: "",
    pais: "",
    carrera: ""
  });
  const [est4, setEst4] = useState({
    nombre: "",
    email: "",
    equipo: "",
    edad: 0,
    genero: "",
    universidad: "",
    telefono: "",
    pais: "",
    carrera: ""
  });

  const submitRegister = () =>{
    Axios.post(`${BASE_API_URL}/api/register/participantes`, {
      estu0: est0,
      estu1: est1,
      estu2: est2,
      estu3: est3,
      estu4: est4
    }).then(()=>{
      console.log("Listo");
    });
    
    deleteRegister();
    setAlert(true);
  }

  const deleteRegister = () =>{
    Axios.delete(`${BASE_API_URL}/api/register/delete`).then(()=>{
      console.log("Listo");
    });
  }

  return (
    <div className="form-lmc">
      {listo ? (
        <div className="done-container">
          <div className="done-wrapper">
            <div className="done-button">
              <button onClick={() => {setListo(false); setAlert(false)}}>
                Continuar para registrar tu equípo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <div className="input-group active">
              <label>País</label>
              <select
              name="pais"
              ref={register({required: true})} onChange={(e) => {
                  setEst0({...est0, pais: e.target.value});
                  setEst1({...est1, pais: e.target.value});
                  setEst2({...est2, pais: e.target.value});
                  setEst3({...est3, pais: e.target.value});
                  setEst4({...est4, pais: e.target.value});
                }}>
                <option value="">Seleccionar...</option>
                <option value="Republica Domicana">Republica Domicana</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Honduras">Honduras</option>
              </select>
              {errors.pais && <p className="input-error">
                <i class="fas fa-exclamation-triangle"></i>
                Este campo es obligatorio</p>}
            </div>
            <div className="input-group active">
              <label>Universidad</label>
              <input
              ref={register({required: true})}
                onChange={(e) => {
                  setEst0({...est0, universidad: e.target.value});
                  setEst1({...est1, universidad: e.target.value});
                  setEst2({...est2, universidad: e.target.value});
                  setEst3({...est3, universidad: e.target.value});
                  setEst4({...est4, universidad: e.target.value});
                }}
                placeholder="Universidad"
                name="universidad"
              />
              {errors.universidad && <p className="input-error">
                <i class="fas fa-exclamation-triangle"></i>
                Este campo es obligatorio</p>}
            </div>
            </div>
          <div className="flex justify-between">
            <div className="input-group active">
              <label>Nombre del equipo</label>
              <input
              ref={register({required: true})}
                onChange={(e) => {
                  setEst0({...est0, equipo: e.target.value});
                  setEst1({...est1, equipo: e.target.value});
                  setEst2({...est2, equipo: e.target.value});
                  setEst3({...est3, equipo: e.target.value});
                  setEst4({...est4, equipo: e.target.value});
                }}
                placeholder="Nombre del equipo"
                name="equipo"
              />
              {errors.equipo && <p className="input-error">
                <i class="fas fa-exclamation-triangle"></i>
                Este campo es obligatorio</p>}
            </div>
            <div className="input-group flex ">
              <label>Código de patrocinio</label>
              <input
                // onChange={(event) => setCodeT(event.target.value)}
                placeholder="Codigo"
                name="codigo"
              />
              {errors.codigo && <p className="input-error">
              <i class="fas fa-exclamation-triangle"></i>
              Este campo es obligatorio</p>}
            </div>
            <div className="input-group">
              <label>Cantidad de participantes</label>
              <select
              name="participantes"
              ref={register({required: true})} onChange={(e) => setTimesC(e.target.value)}>
                <option value="">Seleccionar...</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.participantes && <p className="input-error">
                <i class="fas fa-exclamation-triangle"></i>
                Este campo es obligatorio</p>}
            </div>
          </div>
          <div id="react-form">

            <div className="active form-group parti-container">
              <div className="parti-header">
                <div className="flex justify-center"> 
                  <i className="fas fa-address-card"></i>
                  <span>Lider</span>
                </div>
              </div>
              <div className="parti-body">
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Nombre y apellidos del participante</label>
                    <input
                    name="na0"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst0({ ...est0, nombre: e.target.value });
                    }}
                    placeholder="Nombre y apellidos"
                    />
                    {errors.na0 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Carrera del participante</label>
                    <input
                    name="ca0"
                    ref={register({required: true})}
                      className="input-name"
                      onChange={(e) => {
                        setEst0({ ...est0, carrera: e.target.value });
                      }}
                      placeholder="Carrera"
                      />
                      {errors.ca0 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Edad del participante</label>
                    <input
                    name="ea0"
                    ref={register({required: true})}
                      type="number"
                      onChange={(e) => {
                        setEst0({ ...est0, edad: e.target.value });
                      }}
                      placeholder="edad"
                      />
                                            {errors.ea0 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Email del participante</label>
                    <input
                    name="ema0"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst0({ ...est0, email: e.target.value });
                    }}
                    placeholder="Email"
                    />
                                          {errors.ema0 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Género del participante</label>
                    <select
                    name="ga0"
                    ref={register({required: true})} onChange={(e) => {
                        setEst0({...est0, genero: e.target.value});
                      }}>
                      <option value="">Seleccionar...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    {errors.ga0 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Teléfono móvil del participante</label>
                    <input
                    name="ta0"
                    ref={register({required: true})}
                      onChange={(e) => {
                        setEst0({ ...est0, telefono: e.target.value });
                      }}
                      placeholder="Teléfono móvil"
                      />
                                            {errors.ta0 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="active form-group parti-container">
              <div className="parti-header">
                <div className="flex justify-center"> 
                  <i className="fas fa-address-card"></i>
                  <span>2do. participante</span>
                </div>
              </div>
              <div className="parti-body">
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Nombre y apellidos del participante</label>
                    <input
                    name="na1"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst1({ ...est1, nombre: e.target.value });
                    }}
                    placeholder="Nombre y apellidos"
                    />
                                          {errors.na1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Carrera del participante</label>
                    <input
                    name="ca1"
                    ref={register({required: true})}
                      className="input-name"
                      onChange={(e) => {
                        setEst1({ ...est1, carrera: e.target.value });
                      }}
                      placeholder="Carrera"
                      />
                                            {errors.ca1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Edad del participante</label>
                    <input
                    name="ea1"
                    ref={register({required: true})}
                      type="number"
                      onChange={(e) => {
                        setEst1({ ...est1, edad: e.target.value });
                      }}
                      placeholder="edad"
                      />
                                            {errors.ea1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Email del participante</label>
                    <input
                    name="ema1"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst1({ ...est1, email: e.target.value });
                    }}
                    placeholder="Email"
                    />
                                          {errors.ema1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Género del participante</label>
                    <select
                    name="ga1"
                    ref={register({required: true})} onChange={(e) => {
                        setEst1({...est1, genero: e.target.value});
                      }}>
                      <option value="">Seleccionar...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    {errors.ga1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Teléfono móvil del participante</label>
                    <input
                    name="ta1"
                    ref={register({required: true})}
                      onChange={(e) => {
                        setEst1({ ...est1, telefono: e.target.value });
                      }}
                      placeholder="Teléfono móvil"
                      />
                                            {errors.ta1 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="active form-group parti-container">
              <div className="parti-header">
                <div className="flex justify-center"> 
                  <i className="fas fa-address-card"></i>
                  <span>3er. participante</span>
                </div>
              </div>
              <div className="parti-body">
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Nombre y apellidos del participante</label>
                    <input
                    name="na2"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst2({ ...est2, nombre: e.target.value });
                    }}
                    placeholder="Nombre y apellidos"
                    />
                                          {errors.na2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Carrera del participante</label>
                    <input
                    name="ca2"
                    ref={register({required: true})}
                      className="input-name"
                      onChange={(e) => {
                        setEst2({ ...est2, carrera: e.target.value });
                      }}
                      placeholder="Carrera"
                      />
                                            {errors.ca2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Edad del participante</label>
                    <input
                    name="ea2"
                    ref={register({required: true})}
                      type="number"
                      onChange={(e) => {
                        setEst2({ ...est2, edad: e.target.value });
                      }}
                      placeholder="edad"
                      />
                                            {errors.ea2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Email del participante</label>
                    <input
                    name="ema2"
                    ref={register({required: true})}
                    className="input-name"
                    onChange={(e) => {
                      setEst2({ ...est2, email: e.target.value });
                    }}
                    placeholder="Email"
                    />
                                          {errors.ema2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Género del participante</label>
                    <select
                    name="ga2"
                    ref={register({required: true})} onChange={(e) => {
                        setEst2({...est2, genero: e.target.value});
                      }}>
                      <option value="">Seleccionar...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    {errors.ga2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                  <div className="input-group">
                    <label>Teléfono móvil del participante</label>
                    <input
                    name="ta2"
                    ref={register({required: true})}
                      onChange={(e) => {
                        setEst2({ ...est2, telefono: e.target.value });
                      }}
                      placeholder="Teléfono móvil"
                      />
                                            {errors.ta2 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className={timesC >= 4 ? "active form-group parti-container" : "none"}>
              <div className="parti-header">
                <div className="flex justify-center"> 
                  <i className="fas fa-address-card"></i>
                  <span>4to. participante</span>
                </div>
              </div>
              <div className="parti-body">
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Nombre y apellidos del participante</label>
                    {timesC >= 4 
                    ?
                    <div>
                      <input
                      name="na3"
                      ref={register({required: true})}
                      className="input-name"
                      onChange={(e) => {
                        setEst3({ ...est3, nombre: e.target.value });
                      }}
                      placeholder="Nombre y apellidos"
                      />
                        {errors.na3 && <p className="input-error">
                          <i class="fas fa-exclamation-triangle"></i>
                          Este campo es obligatorio</p>}
                    </div> 
                    :
                    <div>
                    </div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Carrera del participante</label>
                    { timesC >= 4 
                    ? 
                    <div>
                      <input
                        name="ca3"
                        ref={register({required: true})}
                        className="input-name"
                        onChange={(e) => {
                          setEst3({ ...est3, carrera: e.target.value });
                        }}
                        placeholder="Carrera"
                      />
                        {errors.ca3 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                    </div> 
                    : 
                    <div></div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Edad del participante</label>
                    {timesC >= 4 
                    ? 
                     <div>
                      <input
                        name="ea3"
                        ref={register({required: true})}
                        type="number"
                        onChange={(e) => {
                          setEst3({ ...est3, edad: e.target.value });
                        }}
                        placeholder="edad"
                      />
                      {errors.ea3 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                     </div>
                    : 
                    <div></div>
                    }
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Email del participante</label>
                    {timesC >= 4 
                    ?
                    <div>
                      <input
                        name="ema3"
                        ref={register({required: true})}
                        className="input-name"
                        onChange={(e) => {
                          setEst3({ ...est3, email: e.target.value });
                        }}
                        placeholder="Email"
                      />
                      {errors.ema3 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    : 
                    <div></div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Género del participante</label>
                    {timesC >= 4 
                    ? 
                    <div>
                      <select
                        name="ga3"
                        ref={register({required: true})} onChange={(e) => {
                          setEst3({...est3, genero: e.target.value});
                        }}>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                      {errors.ga3 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    :
                    <div></div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Teléfono móvil del participante</label>
                    {timesC >= 4 ? 
                    <div>
                      <input
                        name="ta3"
                        ref={register({required: true})}
                        onChange={(e) => {
                          setEst3({ ...est3, telefono: e.target.value });
                        }}
                        placeholder="Teléfono móvil"
                      />
                      {errors.ta3 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div>
                    :
                    <div></div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={timesC >= 5 ? "active form-group parti-container" : "none"}>
            <div className="parti-header">
                <div className="flex justify-center"> 
                  <i className="fas fa-address-card"></i>
                  <span>5to. participante</span>
                </div>
              </div>
              <div className="parti-body">
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Nombre y apellidos del participante</label>
                    {timesC >= 5 
                    ? 
                    <div>
                      <input
                        name="na4"
                        ref={register({required: true})}
                        className="input-name"
                        onChange={(e) => {
                          setEst4({ ...est4, nombre: e.target.value });
                        }}
                        placeholder="Nombre y apellidos"
                      />
                      {errors.na4 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    : 
                    <div></div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Carrera del participante</label>
                    {timesC >= 5 
                    ?
                    <div>
                      <input
                        name="ca4"
                        ref={register({required: true})}
                        className="input-name"
                        onChange={(e) => {
                          setEst4({ ...est4, carrera: e.target.value });
                        }}
                        placeholder="Carrera"
                      />
                      {errors.ca4 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div>
                    :
                    <div></div>
                    }
                  </div>
                  <div className="input-group">
                    <label>Edad del participante</label>
                    {timesC >= 5
                    ?
                      <div>
                        <input
                          name="ea4"
                          ref={register({required: true})}
                          type="number"
                          onChange={(e) => {
                            setEst4({ ...est4, edad: e.target.value });
                          }}
                          placeholder="edad"
                        />
                        {errors.ea4 && <p className="input-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Este campo es obligatorio</p>}
                      </div>
                    : <div></div>
                    }
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="input-group">
                    <label>Email del participante</label>
                    {timesC >= 5 
                    ? 
                    <div>
                      <input
                        name="ema4"
                        ref={register({required: true})}
                        className="input-name"
                        onChange={(e) => {
                          setEst4({ ...est4, email: e.target.value });
                        }}
                        placeholder="Email"
                      />
                      {errors.ema4 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    : <div></div>}
                  </div>
                  <div className="input-group">
                    <label>Género del participante</label>
                    {timesC >= 5 
                    ? 
                    <div>
                      <select
                        name="ga4"
                        ref={register({required: true})} onChange={(e) => {
                          setEst4({...est4, genero: e.target.value});
                        }}>
                        <option value="">Seleccionar...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                      {errors.ga4 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    : <div></div>}
                  </div>
                  <div className="input-group">
                    <label>Teléfono móvil del participante</label>
                    {timesC >= 5 
                    ? 
                    <div>
                      <input
                        name="ta4"
                        ref={register({required: true})}
                        onChange={(e) => {
                          setEst4({ ...est4, telefono: e.target.value });
                        }}
                        placeholder="Teléfono móvil"
                      />
                      {errors.ta4 && <p className="input-error">
                      <i class="fas fa-exclamation-triangle"></i>
                      Este campo es obligatorio</p>}
                    </div> 
                    : <div></div>}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button onClick={handleSubmit(submitRegister)}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      )}
      { alert &&
        <div className="alert-container animate__animated animate__fadeIn">
          <div className="alert-wrapper">
            <div className="done-icon">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <div className="done-title">
              <p className="done-title-p">
                El equipo se registro exitosamente
              </p>
            </div>
            <div className="done-subtitle">
              <p className="done-subtitle-p">
                Recibirán un correo de confirmación y posteriormente recibirán un correo con el enlace y los accesos para acceder al Latam Management Challenge.
              </p>
            </div>
            <div className="done-subtitle">
              <p className="done-subtitle-p">
                Es requerido que nos sigan en nuestras redes sociales Instagram <a href="https://www.instagram.com/gmcpanama.oficial/">@gmcpanama.oficial </a> 
                y Facebook <a href="https://www.facebook.com/gmcpanama1">GMC Panamá</a>, ya que por allí estaremos 
                compartiendo información de interés a los participantes.
              </p>
            </div>
            <div className="done-subtitle">
              <p className="done-subtitle-p">
                Gracias por aceptar el reto
              </p>
            </div>
            <div className="done-button">
              <button onClick={() => {setListo(true); setAlert(false)}}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Form;

import Link from "next/link";
import React from "react";


export default function Recalculation() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*Para el contenido de las opciones del menú */}
            <div class="main">
{/*Contenido del METRIC LIST */}
                <div id="Recalculation" class="tabcontent">
                    <h1>Recalculation</h1>
                    <hr />
                    <br />
{/* AQUI DEBE DE IR LAS TABLAS*/}
                    <div class="flex-rowRecalculation">
{/*Primer boton de opciones*/}
                        <select name="subject" id="Opcion 1" style={{ width: '25%' }}>
                            <option value selected="selected">Select subject</option>
                        </select><br /><br />
{/*Segunda boton de opciones*/}
                        <select name="topic" id="Opcion 2">
                            <option value selected="selected">Please select subject first</option>
                        </select><br /><br />
{/*Tercer boton de opciones*/}
                        <select name="chapter" id="Opcion 3">
                            <option value selected="selected">Please select topic first</option>
                        </select><br /><br />
                        <button type="submit" class="inputRecalculation"style={{ width: '15%' }}> Recalculate </button>
                        <Link href="/comparison">
                        <button type="submit" class="inputRecalculation"style={{ width: '15%' }}> Compare 
                        </button> </Link>                   
                        </div>
                </div>
                <br />
                {/*Titulo de las tablas*/}
                <div class="flex-rowRecalculation">
                    <tittle style={{ width: '30%' }}>Response Time</tittle>
                    <tittle style={{ width: '30%' }}>Throughtput Rate</tittle>
                    <tittle style={{ width: '30%' }}>Failure Rate</tittle>
                </div>
                {/* AQUI DEBE DE IR LAS TABLAS*/}
                <div class="flex-rowRecalculation">
                    {/*Primera tabla*/}
                    <table class="tableRecalculation" style={{ width: '30%' }}>
                        <tbody><tr>
                            <th />
                            <th>Green</th>
                            <th>Red</th>
                        </tr>
                            <tr>
                                <td>0</td>
                                <td>546.27</td>
                                <td>464.33</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>539.35</td>
                                <td>458.45</td>
                            </tr>
                        </tbody></table>
                    {/*Segunda tabla*/}
                    <table class="tableRecalculation"style={{ width: '30%' }}>
                        <tbody><tr>
                            <th />
                            <th>Green</th>
                            <th>Red</th>
                        </tr>
                            <tr>
                                <td>0</td>
                                <td>342.47</td>
                                <td>393.84</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>333.76</td>
                                <td>383.82</td>
                            </tr>
                        </tbody></table>
                    {/*Tercera tabla*/}
                    <table class="tableRecalculation"style={{ width: '30%' }}>
                        <tbody><tr>
                            <th />
                            <th>Green</th>
                            <th>Red</th>
                        </tr>
                            <tr>
                                <td>0</td>
                                <td>0.05</td>
                                <td>0.05</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>0.1</td>
                                <td>0.1</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    );
}
;
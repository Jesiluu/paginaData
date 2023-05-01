<html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">

            <script>
        //Opciones
                var OpcionYaml = {
                    "Front-end": {
                    "HTML": ["Links", "Images", "Tables", "Lists"],
                "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
                "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
            },
                "Back-end": {
                    "PHP": ["Variables", "Strings", "Arrays"],
                "SQL": ["SELECT", "UPDATE", "DELETE"]
            }
        }
                window.onload = function () {
            var subjectSel = document.getElementById("subject");
                var topicSel = document.getElementById("topic");
                var chapterSel = document.getElementById("chapter");
                for (var x in OpcionYaml) {
                    subjectSel.options[subjectSel.options.length] = new Option(x, x);
            }
                subjectSel.onchange = function () {
                    //empty Chapters- and Topics- dropdowns
                    chapterSel.length = 1;
                topicSel.length = 1;
                //display correct values
                for (var y in OpcionYaml[this.value]) {
                    topicSel.options[topicSel.options.length] = new Option(y, y);
                }
            }
                topicSel.onchange = function () {
                    //empty Chapters dropdown
                    chapterSel.length = 1;
                //display correct values
                var z = OpcionYaml[subjectSel.value][this.value];
                for (var i = 0; i < z.length; i++) {
                    chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
                }
            }
        }
            </script>
    </head>

    <body>
        <!--Para el contenido de las opciones del menú -->
        <div class="main">
            <!--Contenido del METRIC LIST -->
            <div id="Recalculation" class="tabcontent">
                <h1>Recalculation</h1>
                <hr>


                    <!-- AQUI DEBE DE IR LAS TABLAS-->
                    <div class="flex-row">

                        <!--Primer boton de opciones-->
                        <select name="subject" id="Opcion 1">
                            <option value="" selected="selected">Select subject</option>
                        </select><br><br>
                            <!--Segunda boton de opciones-->
                            <select name="topic" id="Opcion 2">
                                <option value="" selected="selected">Please select subject first</option>
                            </select><br><br>
                                <!--Tercer boton de opciones-->
                                <select name="chapter" id="Opcion 3">
                                    <option value="" selected="selected">Please select topic first</option>
                                </select><br><br>
                                    <input type="submit" value="Recalculate">
                                        <input type="submit" value="Compare">
                                        </div>

                                    </div>
                                    <br>
                                        <!--Titulo de las tablas-->
                                        <div class="flex-row">
                                            <tittle style="width:30%">Response Time</tittle>
                                            <tittle style="width:30%">Throughtput Rate</tittle>
                                            <tittle style="width:30%">Failure Rate</tittle>
                                        </div>

                                        <!-- AQUI DEBE DE IR LAS TABLAS-->
                                        <div class="flex-row">
                                            <!--Primera tabla-->
                                            <table style="width:30%">
                                                <tr>
                                                    <th></th>
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
                                            </table>
                                            <!--Segunda tabla-->
                                            <table style="width:30%">
                                                <tr>
                                                    <th></th>
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
                                            </table>
                                            <!--Tercera tabla-->
                                            <table style="width:30%">
                                                <tr>
                                                    <th></th>
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
                                            </table>
                                        </div>

                                    </div>
                                </body>

                                </html>
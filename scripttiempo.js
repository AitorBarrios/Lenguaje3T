
        fetch('https://www.el-tiempo.net/api/json/v2/home')
            .then(response => response.json())
            .then(data => {

                const ciudades = data.ciudades;
                const today = data.today;
                const tomorrow = data.tomorrow;


                let ciudadesTable = '<h2>Ciudades</h2><table>';
                ciudadesTable += `
                    <tr>
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Temperaturas (°C)</th>
                        <th>Estado del cielo</th>
                    </tr>
                `;
                ciudades.forEach(ciudad => {
                    ciudadesTable += `
                        <tr>
                            <td>${ciudad.name}</td>
                            <td>${ciudad.nameProvince}</td>
                            <td>Máxima: ${ciudad.temperatures.max}, Mínima: ${ciudad.temperatures.min}</td>
                            <td>${ciudad.stateSky.description}</td>
                        </tr>
                    `;
                });
                ciudadesTable += '</table>';


                document.getElementById('data').innerHTML = `
                    ${ciudadesTable}

                    <h2>Hoy</h2>
                    <p>${today.p.join('<br>')}</p>

                    <h2>Mañana</h2>
                    <p>${tomorrow.p.join('<br>')}</p>
                `;
            })
            .catch(error => console.log(error));
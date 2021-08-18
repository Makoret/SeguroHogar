$.ajax({
    url: "json/data.json",
    method: "GET",
    dataType: "json",
    success: function (Data) {
        Data.forEach((element) => {
            $("#grid-container").append(
                `<div class="grid-item">
                    <div class="subtitulo">
                        <h3>${Data.indexOf(element) + 1}. ${element.Titulo}</h3>
                        <h4>$<span class="valor">${element.Costo}</span></h4>
                    </div>
                    <p>${element.Descripcion}</p>
                    <b>${element.Clausula}</b>
                </div>`
            );
        });
    },
});

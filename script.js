function cambioPrestamo() {
    let prestamo = document.getElementById('prestamo').value;
    let intereses = document.getElementById('intereses').value;
    let meses = document.getElementById('meses').value;
    let interes = (prestamo * (intereses * .01)) / meses;

    let pagos = ((prestamo/meses) + interes).toFixed(2);
    pagos = pagos.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
    document.getElementById('pagos').innerHTML = "Pagos mensuales = €"+pagos;
}


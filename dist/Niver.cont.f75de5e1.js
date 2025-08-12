AOS.init();
const dataDoEvento = new Date("Dec 12, 2025 19:00:00 ");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;
    const DiasemMs = 86400000;
    const HorasemMs = 3600000;
    const minutosemMs = 60000;
    const diasAteOevento = Math.floor(distanciaAteOevento / DiasemMs);
    const HorasAteOevento = Math.floor(distanciaAteOevento % DiasemMs / HorasemMs);
    const minutosAteOevento = Math.floor(distanciaAteOevento % HorasemMs / minutosemMs);
    const segundosAteOevento = Math.floor(distanciaAteOevento % minutosemMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOevento} d ${HorasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`;
    if (distanciaAteOevento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
}, 1000);

//# sourceMappingURL=Niver.cont.f75de5e1.js.map

trigger validarFecha on Opportunity (before update) {
    list <Opportunity> Opp = (trigger.new);

    for (Opportunity OpModif : Opp) {
        if (OpModif.StageName != 'Closed Won') {
            if (fechaDisponible.noDisponible(OpModif)== true) {
                OpModif.addError('No se puede reservar para la Fecha solicitada este vehiculo');
            }
        }
    }
}
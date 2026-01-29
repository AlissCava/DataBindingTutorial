sap.ui.define([
	"sap/ui/core/UIComponent"
], (UIComponent) => {
	"use strict";
	return UIComponent.extend("ui5.databinding.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});
});
/*
STEP 1
Definizione del Componente (Component.js):
- UIComponent.extend: crea il punto di controllo centrale per il tutorial sul Data Binding, utilizzando il namespace "ui5.databinding".
- IAsyncContentCreation: interfaccia che abilita la creazione asincrona della vista e dei contenuti, garantendo un caricamento più fluido e moderno.
- manifest: "json": indica al componente di leggere tutte le impostazioni (modelli, risorse, configurazioni) dal file manifest.json esterno.
- Struttura Minimalista: in questo stadio, il componente delega la maggior parte della logica descrittiva al descrittore dell'app (App Descriptor), mantenendo il codice pulito.
- Modularità: permette all'applicazione di essere incapsulata e riutilizzata facilmente all'interno di diversi contenitori (come il div nel file index.html).

STEP 5
Configurazione della Modalità di Binding (Component.js):
- BindingMode: importa le costanti necessarie per definire come i dati fluiscono tra modello e vista.
- setDefaultBindingMode(BindingMode.OneWay): imposta la modalità "sola lettura" come predefinita per il modello principale.
- OneWay vs TwoWay: con OneWay, le modifiche nel modello aggiornano la vista, ma i cambiamenti effettuati dall'utente (es. in un campo di input) non modificano automaticamente il modello.
- Sicurezza dei dati: questa impostazione è utile per proteggere l'integrità dei dati o per ottimizzare le prestazioni quando non è richiesto l'aggiornamento immediato del modello.
- Flessibilità: impostando il default nel Component, la configurazione viene applicata globalmente a tutti i controlli che utilizzano quel modello nell'app.

STEP 6
Gestione dei Modelli Multipli (Component.js):
- UIComponent: funge da contenitore globale per tutti i modelli di dati definiti nell'applicazione.
- Named Models: permette l'uso di più istanze di modelli contemporaneamente assegnando loro dei nomi (es. "i18n" per le traduzioni o "device" per l'hardware).
- Propagazione: una volta impostato un modello sul componente (setModel), esso viene ereditato automaticamente da tutti i controlli figli, nipoti e così via.
- Modello di Default: quando un modello viene registrato senza nome, diventa il modello predefinito dell'app, accessibile direttamente senza prefissi nel binding.
- Flessibilità: questa architettura consente a una singola vista di consumare dati da fonti diverse (es. un file JSON locale e un servizio OData remoto) contemporaneamente.
- Manifest Integration: grazie al riferimento "manifest: json", SAPUI5 può istanziare questi modelli automaticamente all'avvio senza codice aggiuntivo nel metodo init.
*/
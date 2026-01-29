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
STEP: 1
Definizione del Componente (Component.js):
- UIComponent.extend: crea il punto di controllo centrale per il tutorial sul Data Binding, utilizzando il namespace "ui5.databinding".
- IAsyncContentCreation: interfaccia che abilita la creazione asincrona della vista e dei contenuti, garantendo un caricamento più fluido e moderno.
- manifest: "json": indica al componente di leggere tutte le impostazioni (modelli, risorse, configurazioni) dal file manifest.json esterno.
- Struttura Minimalista: in questo stadio, il componente delega la maggior parte della logica descrittiva al descrittore dell'app (App Descriptor), mantenendo il codice pulito.
- Modularità: permette all'applicazione di essere incapsulata e riutilizzata facilmente all'interno di diversi contenitori (come il div nel file index.html).
*/
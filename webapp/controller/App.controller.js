sap.ui.define([
	"sap/m/library",
	"sap/ui/core/mvc/Controller"
], (mobileLibrary, Controller) => {
	"use strict";

	return Controller.extend("ui5.databinding.controller.App", {
		formatMail(sFirstName, sLastName) {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			return mobileLibrary.URLHelper.normalizeEmail(
				`${sFirstName}.${sLastName}@example.com`,
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
	});
});

/*
STEP 9
Logica del Formattatore Personalizzato (App.controller.js):
- sap.m.library: importa la libreria mobile per accedere all'URLHelper, uno strumento utile per gestire link esterni e protocolli come "mailto:".
- formatMail: funzione di formattazione che riceve in input nome e cognome direttamente dal modello dati.
- Sincronizzazione Automatica: grazie al data binding, ogni volta che l'utente modifica i campi di input nel modello, questa funzione viene invocata nuovamente dal framework per aggiornare il link.
- URLHelper.normalizeEmail: costruisce un URL email valido, concatenando l'indirizzo generato, l'oggetto della mail e il corpo del messaggio.
- Integrazione i18n: recupera l'oggetto e il corpo del messaggio dai file di traduzione. Nota l'uso di [sFirstName] per inserire dinamicamente il nome del destinatario all'interno della stringa tradotta.
- User Experience: permette all'utente di aprire il proprio client di posta predefinito con tutti i campi già compilati basandosi sui dati inseriti nell'app.
*/
sap.ui.define([
	"sap/m/library",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/type/Currency"
], (mobileLibrary, Controller, Currency) => {
	"use strict";

	return Controller.extend("ui5.databinding.controller.App", {
		formatMail(sFirstName, sLastName) {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		},

		formatStockValue(fUnitPrice, iStockLevel, sCurrCode) {
			const oCurrency = new Currency();

			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
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

STEP 12
Estensione dei Formattatori nel Controller (App.controller.js):
- sap.ui.model.type.Currency: importata per gestire correttamente la formattazione dei simboli monetari e dei decimali in base agli standard internazionali.
- formatStockValue: una funzione di calcolo dinamico che moltiplica il prezzo unitario per la quantità in stock.
- oCurrency.formatValue: trasforma il risultato numerico in una stringa formattata professionalmente (es. "150,00 EUR"), assicurando che il simbolo della valuta sia posizionato correttamente.
- Multi-Input: il formattatore accetta tre parametri (prezzo, stock, codice valuta) che verranno passati tramite un "Parts Binding" nella vista XML.
- Reattività: il valore totale viene ricalcolato istantaneamente dal framework ogni volta che uno dei tre parametri nel modello dati subisce una modifica.

*/
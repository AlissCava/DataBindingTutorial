sap.ui.define([
	"sap/m/library",
  "sap/m/ObjectAttribute",
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
		},

		onItemSelected(oEvent) {
			const oSelectedItem = oEvent.getSource();
			const oContext = oSelectedItem.getBindingContext("products");
			const sPath = oContext.getPath();
			const oProductDetailPanel = this.byId("productDetailsPanel");
			oProductDetailPanel.bindElement({ path: sPath, model: "products" });
		}
    productListFactory(sId, oContext) {
			let oUIControl;

			// Decide based on the data which dependent to clone
			if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
				// The item is discontinued, so use a StandardListItem
				oUIControl = this.byId("productSimple").clone(sId);
			} else {
				// The item is available, so we will create an ObjectListItem
				oUIControl = this.byId("productExtended").clone(sId);

				// The item is temporarily out of stock, so we will add a status
				if (oContext.getProperty("UnitsInStock") < 1) {
					oUIControl.addAttribute(new ObjectAttribute({
						text : {
							path: "i18n>outOfStock"
						}
					}));
				}
			}

			return oUIControl;
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

STEP 13
Gestione della Selezione e Element Binding (App.controller.js):
- onItemSelected: viene invocata quando l'utente interagisce con un elemento della lista (es. un clic su una riga).
- oEvent.getSource(): recupera l'istanza del controllo che ha scatenato l'evento.
- getBindingContext("products"): ottiene l'oggetto di contesto specifico per il modello "products", che contiene i dati dell'elemento cliccato.
- getPath(): estrae il percorso assoluto dei dati nel modello (es. "/Products/3").
- bindElement: questa è la funzione chiave. "Incolla" il pannello dei dettagli (productDetailsPanel) a un punto specifico del modello. 
- Ereditarietà del Binding: una volta collegato il pannello al percorso (sPath), tutti i controlli al suo interno (Label, Text, ecc.) mostreranno automaticamente i dati relativi a quel particolare prodotto senza bisogno di ulteriore codice.
*/
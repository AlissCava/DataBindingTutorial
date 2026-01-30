SAPUI5 Data Binding Tutorial

📄 Descrizione dei File
package.json
Gestisce le dipendenze e l'automazione del progetto Node.js.

Dipendenze: Include @ui5/cli come strumento di sviluppo principale per la gestione del ciclo di vita dell'app.

Script Start: Definisce il comando npm start per avviare il server locale tramite ui5 serve -o index.html.


index.html
Il punto di ingresso dell'applicazione nel browser.

Bootstrap: Carica il core di SAPUI5 (resources/sap-ui-core.js), imposta il tema sap_horizon e definisce il namespace ui5.databinding.

Inizializzazione: Utilizza ComponentSupport per istanziare l'applicazione in modo asincrono all'interno di un contenitore div nel body.


webapp/Component.js
Il cuore logico che coordina l'intera applicazione.

Asincronicità: Implementa l'interfaccia sap.ui.core.IAsyncContentCreation per ottimizzare il caricamento asincrono di viste e modelli.

Metadata: Utilizza la proprietà manifest: "json" per caricare tutte le impostazioni dal file descrittore esterno.


webapp/manifest.json
Il "App Descriptor" che centralizza tutte le impostazioni dichiarative.

Identità: Definisce l'ID univoco dell'app (ui5.databinding) e la versione.

Modelli: Configura il JSONModel predefinito (data.json), il modello specifico per i prodotti (Products.json) e il ResourceModel per le traduzioni (i18n).

Root View: Specifica che la vista principale da caricare all'avvio è ui5.databinding.view.App.


webapp/controller/App.controller.js
Contiene la logica operativa e i metodi per la manipolazione dei dati.

Factory Function: Implementa productListFactory per decidere dinamicamente quale frammento XML clonare per ogni riga della lista in base allo stato del prodotto.

Formatter: Include logiche per il calcolo del valore del magazzino e la generazione di link email dinamici.

Element Binding: Gestisce onItemSelected per aggiornare il pannello dettagli collegandolo al contesto del prodotto selezionato.


webapp/i18n/i18n.properties (e i18n_de.properties)
Gestiscono l'internazionalizzazione dell'app.

Localizzazione: Contengono le traduzioni per etichette come ProductName, UnitPrice e messaggi di stato come outOfStock.


webapp/model/data.json & Products.json
Forniscono i dati locali per l'applicazione.

Dati Utente: data.json definisce informazioni generali come nome, indirizzo e parametri di business come priceThreshold.

Dati Prodotti: Products.json elenca il catalogo tecnico con prezzi, quantità e stato di produzione.


webapp/view/App.view.xml
Definisce l'interfaccia utente principale utilizzando il linguaggio dichiarativo XML.

Lista Dinamica: Utilizza una factory function per popolare la lista prodotti.

Dettagli: Include un SimpleForm per visualizzare i campi del prodotto selezionato tramite binding ai dati del modello.


webapp/view/ProductSimple.fragment.xml & ProductExtended.fragment.xml
Frammenti riutilizzabili caricati dinamicamente dal controller.

ProductSimple: Utilizza un StandardListItem per prodotti fuori produzione.

ProductExtended: Utilizza un ObjectListItem con formattazione complessa della valuta per i prodotti attivi.


🏗️ Struttura del Progetto
L'applicazione segue l'architettura MVC (Model-View-Controller) standard di SAPUI5 per garantire modularità:

Controller (webapp/controller/): Gestisce gli eventi utente e la logica di business.

View (webapp/view/): Definisce l'interfaccia utente e i frammenti per la visualizzazione dinamica.

Model (webapp/model/): Isola i dati JSON e le traduzioni (i18n), permettendo aggiornamenti indipendenti dall'interfaccia.

Descriptor (manifest.json): Funge da mappa centrale del progetto, definendo come modelli e viste interagiscono tra loro.

const TermsAndConditionsIT = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Termini e Condizioni di Trainody</h1>

          <p className="text-sm text-muted-foreground mb-8">Data di ultima modifica: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Oggetto e accettazione</h2>
            <p className="mb-4">
              I presenti Termini e Condizioni ("Termini") disciplinano l'utilizzo di Trainody ("il Servizio", "noi", "nostro"), piattaforma software as a service (SaaS) che permette ai personal trainer di gestire i propri clienti e fornire programmi di allenamento online, accessibile tramite il sito trainody.com, l'applicazione web app.trainody.com e l'app mobile per i clienti.
            </p>
            <p className="mb-4">
              Il Servizio è offerto da Trainody. Creando un account o utilizzando il Servizio, l'utente dichiara di aver letto e accettato i presenti Termini. Se non si accettano i Termini, non è possibile utilizzare il Servizio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definizioni</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{"\"Utente\": qualsiasi persona che accede o utilizza il Servizio"}</li>
              <li>{"\"Personal Trainer\" o \"Trainer\": il professionista che utilizza il Servizio per gestire i propri clienti e fornire programmi di allenamento"}</li>
              <li>{"\"Cliente\": la persona che riceve servizi di allenamento tramite la piattaforma da parte di un Trainer"}</li>
              <li>{"\"Contenuti\": testi, immagini, video, schede e programmi di allenamento, anamnesi, messaggi e qualsiasi altro materiale caricato sulla piattaforma"}</li>
              <li>{"\"Piano\": il piano di abbonamento sottoscritto dal Trainer (Basic, Pro o Business)"}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Registrazione e account</h2>

            <h3 className="text-xl font-medium mb-3">3.1 Requisiti di registrazione</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>I Personal Trainer devono essere maggiorenni e in possesso delle qualifiche eventualmente richieste dalla normativa applicabile alla loro attività professionale</li>
              <li>I Clienti devono essere maggiorenni; i minori di 18 anni possono utilizzare il Servizio solo con il consenso di chi esercita la responsabilità genitoriale, acquisito a cura del Trainer</li>
              <li>Le informazioni fornite in fase di registrazione devono essere veritiere, accurate e complete, e mantenute aggiornate</li>
              <li>Il Trainer dichiara di utilizzare il Servizio nell'esercizio della propria attività professionale</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 Sicurezza dell'account</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'utente è responsabile della riservatezza delle proprie credenziali di accesso e di tutte le attività svolte tramite il proprio account</li>
              <li>L'utente deve notificarci immediatamente qualsiasi accesso non autorizzato o violazione di sicurezza all'indirizzo info@trainody.com</li>
              <li>È vietato condividere le credenziali di accesso con terzi o cedere l'account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Descrizione del Servizio</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Funzionalità</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Gestione dei clienti (profili, anamnesi, progressi) per personal trainer</li>
              <li>Creazione e condivisione di schede e programmi di allenamento, con video esplicativi</li>
              <li>Monitoraggio dei progressi in tempo reale</li>
              <li>Chat integrata trainer-cliente</li>
              <li>Calendario e gestione degli appuntamenti</li>
              <li>Gestione dei pagamenti online (nei Piani che la includono)</li>
              <li>App mobile gratuita per i Clienti (iOS e Android)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Natura del Servizio — esclusione di consulenza medica</h3>
            <p className="mb-4">
              Trainody è uno strumento tecnologico di gestione e comunicazione. <strong>Trainody non fornisce consulenza medica, sanitaria o nutrizionale</strong> e non è responsabile dei contenuti dei programmi di allenamento, che sono predisposti in autonomia dal Trainer. Prima di iniziare qualsiasi programma di allenamento, il Cliente è invitato a consultare un medico. Il Trainer è l'unico responsabile della valutazione dell'idoneità fisica dei propri Clienti e dell'adeguatezza dei programmi assegnati.
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Limitazioni d'uso</h3>
            <p className="mb-2">È vietato:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizzare il Servizio per attività illegali o contrarie ai presenti Termini</li>
              <li>Caricare contenuti inappropriati, offensivi, diffamatori o che violino diritti di terzi</li>
              <li>Tentare di accedere a parti non autorizzate del sistema o eludere le misure di sicurezza</li>
              <li>Interferire con il funzionamento del Servizio, anche tramite uso automatizzato non autorizzato (bot, scraping)</li>
              <li>Utilizzare il Servizio per spam o comunicazioni promozionali non autorizzate</li>
              <li>Rivendere, sublicenziare o mettere a disposizione di terzi il Servizio al di fuori di quanto previsto dal proprio Piano</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Piani, pagamenti e abbonamenti</h2>

            <h3 className="text-xl font-medium mb-3">5.1 Piani e prezzi</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Basic</strong> — gratuito, fino a 2 clienti</li>
              <li><strong>Pro</strong> — €19,90/mese, fino a 20 clienti</li>
              <li><strong>Business</strong> — €49,90/mese, fino a 50 clienti, inclusa la gestione dei pagamenti online</li>
            </ul>
            <p className="mb-4">
              I prezzi aggiornati e il dettaglio delle funzionalità di ciascun Piano sono pubblicati su trainody.com. I prezzi si intendono IVA inclusa ove applicabile. Ci riserviamo il diritto di modificare i prezzi con un preavviso di almeno 30 giorni; la modifica si applica dal rinnovo successivo e l'utente può recedere prima della sua efficacia.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Fatturazione e rinnovo</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>I pagamenti sono elaborati dal fornitore Stripe; Trainody non memorizza i dati completi delle carte</li>
              <li>La fatturazione avviene in via anticipata, secondo la periodicità del Piano scelto</li>
              <li>L'abbonamento si rinnova automaticamente alla scadenza di ciascun periodo, salvo disdetta</li>
              <li>In caso di mancato pagamento, l'accesso alle funzionalità a pagamento può essere sospeso previo avviso</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Disdetta e recesso</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'abbonamento può essere disdetto in qualsiasi momento dalle impostazioni dell'account o scrivendo a info@trainody.com</li>
              <li>La disdetta ha effetto al termine del periodo di fatturazione in corso; non sono previsti rimborsi pro-rata per i periodi già pagati, salvo quanto previsto da norme inderogabili</li>
              <li>Se l'utente riveste la qualità di consumatore, gode del diritto di recesso entro 14 giorni dalla sottoscrizione ai sensi del Codice del Consumo, salvo che abbia richiesto l'immediata esecuzione del servizio e questo sia stato interamente prestato</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contenuti e proprietà intellettuale</h2>

            <h3 className="text-xl font-medium mb-3">6.1 Titolarità dei contenuti</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>I Personal Trainer conservano ogni diritto sui Contenuti che creano e caricano</li>
              <li>Caricando Contenuti, il Trainer concede a Trainody una licenza non esclusiva, gratuita e limitata alla durata del rapporto, al solo fine di erogare il Servizio (archiviazione, visualizzazione ai Clienti autorizzati, backup)</li>
              <li>Trainody e i suoi licenzianti conservano ogni diritto sul software, sull'interfaccia, sui marchi e sugli altri elementi della piattaforma</li>
              <li>Concediamo all'utente una licenza personale, non esclusiva, non trasferibile e revocabile per l'uso del Servizio in conformità ai presenti Termini</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.2 Responsabilità sui contenuti</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gli utenti sono gli unici responsabili dei Contenuti che caricano</li>
              <li>I Contenuti devono rispettare la legge, inclusa la normativa sul diritto d'autore</li>
              <li>Trainody può rimuovere, previa comunicazione ove possibile, Contenuti inappropriati o illeciti, e sospendere gli account coinvolti</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy e protezione dei dati</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Il trattamento dei dati personali è disciplinato dalla nostra <a href="/it/privacy-policy">Privacy Policy</a>, che costituisce parte integrante dei presenti Termini</li>
              <li>Per i dati dei Clienti inseriti in piattaforma, il Trainer agisce come autonomo titolare del trattamento e Trainody come responsabile del trattamento ai sensi dell'art. 28 GDPR</li>
              <li>Il Trainer garantisce di disporre di un'idonea base giuridica per i dati dei propri Clienti, incluso il consenso esplicito per i dati relativi alla salute (anamnesi, condizioni fisiche)</li>
              <li>I dati sono gestiti in conformità al GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Garanzie e responsabilità</h2>

            <h3 className="text-xl font-medium mb-3">8.1 Disponibilità del Servizio</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Il Servizio è fornito "così com'è" e "come disponibile"</li>
              <li>Ci impegniamo a mantenere il Servizio operativo e sicuro, ma non garantiamo che sia sempre disponibile, tempestivo o privo di errori; potranno verificarsi interruzioni per manutenzione, aggiornamenti o cause di forza maggiore</li>
              <li>Eseguiamo backup periodici, ma raccomandiamo agli utenti di conservare copia dei materiali essenziali</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">8.2 Limitazione di responsabilità</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nei limiti consentiti dalla legge, Trainody non risponde dei danni indiretti, consequenziali, della perdita di profitti o di opportunità derivanti dall'uso o dal mancato uso del Servizio</li>
              <li>Trainody non è responsabile di infortuni o problemi di salute derivanti dall'esecuzione dei programmi di allenamento, la cui predisposizione e supervisione è di esclusiva competenza del Trainer</li>
              <li>Nei limiti consentiti dalla legge, la responsabilità complessiva di Trainody è limitata all'importo pagato dall'utente nei 12 mesi precedenti l'evento dannoso</li>
              <li>Nulla nei presenti Termini esclude o limita la responsabilità per dolo o colpa grave, né i diritti inderogabili riconosciuti ai consumatori</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Modifiche al Servizio e ai Termini</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ci riserviamo il diritto di modificare, sospendere o interrompere il Servizio o parti di esso</li>
              <li>Le modifiche sostanziali ai presenti Termini saranno comunicate via email o tramite avviso in piattaforma con almeno 30 giorni di anticipo</li>
              <li>L'uso continuato del Servizio dopo l'entrata in vigore delle modifiche costituisce accettazione; in caso di disaccordo, l'utente può recedere senza penali prima di tale data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Durata, sospensione e risoluzione</h2>

            <h3 className="text-xl font-medium mb-3">10.1 Recesso dell'utente</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>L'utente può chiudere il proprio account in qualsiasi momento</li>
              <li>Alla chiusura, i dati saranno cancellati o restituiti secondo quanto previsto dalla Privacy Policy, salvi gli obblighi di conservazione di legge</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">10.2 Sospensione e risoluzione da parte di Trainody</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Possiamo sospendere o chiudere gli account che violino i presenti Termini, previa diffida ove la violazione sia sanabile</li>
              <li>In caso di violazioni gravi (attività illecite, compromissione della sicurezza, danno ad altri utenti), la sospensione o chiusura può avvenire con effetto immediato</li>
              <li>Restano salvi i diritti maturati e le clausole destinate per natura a sopravvivere (proprietà intellettuale, limitazioni di responsabilità, legge applicabile)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Legge applicabile e foro competente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>I presenti Termini sono regolati dalla legge italiana</li>
              <li>Per gli utenti che agiscono come professionisti, è esclusivamente competente il foro della sede legale di Trainody</li>
              <li>Per gli utenti consumatori, è competente il foro del luogo di residenza o domicilio del consumatore, ai sensi del Codice del Consumo</li>
              <li>Il consumatore può inoltre ricorrere alla piattaforma europea di risoluzione online delle controversie (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contatti</h2>
            <p className="mb-4">Per domande sui presenti Termini:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@trainody.com">info@trainody.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/trainody.app" target="_blank" rel="noopener noreferrer">@trainody.app</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Disposizioni finali</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'eventuale invalidità di una clausola non pregiudica la validità delle restanti disposizioni</li>
              <li>I presenti Termini, insieme alla Privacy Policy, costituiscono l'intero accordo tra le parti in relazione al Servizio</li>
              <li>Il mancato esercizio di un diritto non costituisce rinuncia allo stesso</li>
              <li>L'utente non può cedere i diritti e gli obblighi derivanti dai presenti Termini senza il nostro consenso scritto</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default TermsAndConditionsIT;

const PrivacyPolicyIT = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy di Trainody</h1>

          <p className="text-sm text-muted-foreground mb-8">Data di ultima modifica: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduzione</h2>
            <p className="mb-4">
              La presente Privacy Policy descrive come Trainody raccoglie, utilizza, conserva e protegge i dati personali degli utenti della piattaforma software as a service (SaaS) dedicata ai personal trainer e ai loro clienti, accessibile tramite il sito trainody.com, l'applicazione web app.trainody.com e l'app mobile per i clienti.
            </p>
            <p className="mb-4">
              Il trattamento dei dati personali avviene nel rispetto del Regolamento (UE) 2016/679 ("GDPR") e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018 ("Codice Privacy").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Titolare del trattamento</h2>
            <p className="mb-4">
              Il titolare del trattamento è Trainody. Per ogni questione relativa alla privacy è possibile contattarci all'indirizzo email: <a href="mailto:info@trainody.com">info@trainody.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Ruoli del trattamento: Trainody e Personal Trainer</h2>
            <p className="mb-4">
              La piattaforma è utilizzata da personal trainer per gestire i propri clienti. È quindi importante distinguere due ruoli:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trainody come titolare:</strong> per i dati degli account (registrazione, fatturazione, log tecnici, dati di utilizzo della piattaforma), Trainody agisce come titolare del trattamento.
              </li>
              <li>
                <strong>Trainody come responsabile:</strong> per i dati dei clienti finali inseriti dai personal trainer (anagrafiche, anamnesi, misurazioni, schede di allenamento, progressi, messaggi), il personal trainer agisce come autonomo titolare del trattamento e Trainody come responsabile del trattamento ai sensi dell'art. 28 GDPR, trattando tali dati esclusivamente per fornire il servizio e secondo le istruzioni del trainer.
              </li>
            </ul>
            <p className="mt-4">
              Il personal trainer è responsabile di disporre di un'idonea base giuridica (ad es. il consenso esplicito per i dati relativi alla salute) per i dati dei propri clienti che carica in piattaforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Dati che raccogliamo</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Dati forniti dall'utente</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Dati di registrazione: nome, cognome, indirizzo email, password (conservata in forma cifrata)</li>
              <li>Informazioni professionali del personal trainer (ad es. nome dell'attività, palestra/studio)</li>
              <li>Dati di contatto e anagrafici dei clienti inseriti dal trainer</li>
              <li>Schede e piani di allenamento, note, video e materiali caricati</li>
              <li>Misurazioni fisiche, progressi e obiettivi di fitness</li>
              <li>Informazioni di anamnesi e documentazione rilevante per l'attività fisica, che possono includere <strong>dati relativi alla salute</strong> (categoria particolare di dati ex art. 9 GDPR), trattati solo previa idonea base giuridica</li>
              <li>Contenuti delle comunicazioni nella chat trainer-cliente</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Dati di pagamento</h3>
            <p className="mb-4">
              I pagamenti degli abbonamenti sono gestiti dal fornitore Stripe. Trainody non memorizza i dati completi delle carte di pagamento: riceve da Stripe solo le informazioni necessarie alla gestione dell'abbonamento (esito del pagamento, ultime cifre della carta, stato della sottoscrizione).
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Dati raccolti automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log di accesso e di sistema</li>
              <li>Indirizzo IP e paese di provenienza (utilizzato anche per proporre la lingua del sito)</li>
              <li>Informazioni su dispositivo e browser</li>
              <li>Cookie tecnici necessari al funzionamento della piattaforma (si veda la sezione 11)</li>
              <li>Dati aggregati di utilizzo e prestazione del sito (analytics senza cookie, si veda la sezione 11)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Finalità e basi giuridiche del trattamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Erogazione del servizio</strong> (creazione e gestione dell'account, funzionalità della piattaforma, comunicazione trainer-cliente, app mobile) — base giuridica: esecuzione del contratto (art. 6.1.b GDPR)
              </li>
              <li>
                <strong>Gestione di pagamenti e fatturazione</strong> — base giuridica: esecuzione del contratto e adempimento di obblighi legali (art. 6.1.b e 6.1.c GDPR)
              </li>
              <li>
                <strong>Trattamento di dati relativi alla salute</strong> (anamnesi, condizioni rilevanti per l'allenamento) — base giuridica: consenso esplicito dell'interessato (art. 9.2.a GDPR), raccolto dal personal trainer in qualità di titolare
              </li>
              <li>
                <strong>Sicurezza della piattaforma</strong> (prevenzione di accessi non autorizzati, abusi e frodi) — base giuridica: legittimo interesse (art. 6.1.f GDPR)
              </li>
              <li>
                <strong>Miglioramento del servizio</strong> tramite statistiche aggregate di utilizzo — base giuridica: legittimo interesse (art. 6.1.f GDPR)
              </li>
              <li>
                <strong>Comunicazioni di servizio</strong> (notifiche tecniche, modifiche ai termini, avvisi di sicurezza) — base giuridica: esecuzione del contratto e legittimo interesse
              </li>
              <li>
                <strong>Adempimento di obblighi di legge</strong> (fiscali, contabili, richieste dell'autorità) — base giuridica: obbligo legale (art. 6.1.c GDPR)
              </li>
            </ul>
            <p className="mt-4">
              Il conferimento dei dati necessari all'erogazione del servizio è requisito per l'utilizzo della piattaforma: in sua assenza non è possibile fornire il servizio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Destinatari dei dati</h2>
            <p className="mb-2">
              I dati possono essere comunicati alle seguenti categorie di destinatari, nominati ove necessario responsabili del trattamento ai sensi dell'art. 28 GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong> — database, autenticazione e archiviazione dei dati della piattaforma</li>
              <li><strong>Vercel</strong> — hosting del sito e dell'applicazione web, statistiche aggregate di utilizzo e prestazione</li>
              <li><strong>Stripe</strong> — elaborazione dei pagamenti e gestione degli abbonamenti</li>
              <li><strong>Resend</strong> — invio delle email transazionali e di servizio</li>
              <li>Personal trainer e rispettivi clienti, nei limiti della relazione professionale che li lega</li>
              <li>Consulenti e fornitori (ad es. fiscali, legali) nei limiti delle finalità sopra indicate</li>
              <li>Autorità competenti, quando richiesto dalla legge</li>
            </ul>
            <p className="mt-4">I dati personali non vengono venduti né ceduti a terzi per finalità di marketing.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Trasferimento dei dati extra-UE</h2>
            <p className="mb-4">
              I dati sono conservati prevalentemente su server situati nell'Unione Europea. Alcuni fornitori sopra indicati hanno sede negli Stati Uniti o possono trattare dati al di fuori dell'UE: in tali casi il trasferimento avviene sulla base di una decisione di adeguatezza della Commissione Europea (incluso l'EU-U.S. Data Privacy Framework, ove applicabile) oppure delle Clausole Contrattuali Standard (SCC), con garanzie supplementari ove necessarie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Conservazione dei dati</h2>
            <p className="mb-2">I dati personali sono conservati per i seguenti periodi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dati dell'account e contenuti della piattaforma: per la durata del rapporto contrattuale</li>
              <li>Dati di fatturazione e documenti fiscali: 10 anni, in adempimento degli obblighi di legge</li>
              <li>Log tecnici e di sicurezza: fino a 12 mesi, salvo necessità di accertamento di illeciti</li>
              <li>Dati non essenziali residui: al massimo 24 mesi dalla cessazione del servizio</li>
            </ul>
            <p className="mt-4">
              Alla scadenza dei termini, i dati vengono cancellati o resi anonimi. Alla chiusura dell'account, i dati dei clienti inseriti dal trainer vengono cancellati o restituiti secondo le istruzioni del trainer stesso, salvi gli obblighi di conservazione di legge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Diritti dell'interessato</h2>
            <p className="mb-2">Ai sensi degli artt. 15-22 GDPR, l'interessato ha diritto di:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai propri dati e ottenerne copia</li>
              <li>Rettificare i dati inesatti o incompleti</li>
              <li>Ottenere la cancellazione dei dati ("diritto all'oblio")</li>
              <li>Limitare il trattamento</li>
              <li>Ricevere i dati in formato strutturato e di uso comune (portabilità)</li>
              <li>Opporsi al trattamento fondato sul legittimo interesse</li>
              <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
              <li>Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
            </ul>
            <p className="mt-4">
              Le richieste possono essere inviate a <a href="mailto:info@trainody.com">info@trainody.com</a>. Risponderemo entro 30 giorni. Per i dati inseriti dal proprio personal trainer, il cliente può rivolgersi anche direttamente al trainer, in qualità di titolare del trattamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Sicurezza dei dati</h2>
            <p className="mb-2">Adottiamo misure di sicurezza tecniche e organizzative adeguate al rischio, tra cui:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cifratura dei dati in transito (TLS/HTTPS) e a riposo</li>
              <li>Conservazione delle password in forma cifrata (hashing)</li>
              <li>Controllo degli accessi e principio di minimizzazione</li>
              <li>Backup periodici</li>
              <li>Monitoraggio e procedure di gestione delle violazioni (data breach), con notifica al Garante e agli interessati nei casi previsti dagli artt. 33-34 GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Cookie e tecnologie simili</h2>
            <p className="mb-2">Il sito utilizza esclusivamente cookie tecnici, per i quali non è richiesto il consenso:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>NEXT_LOCALE</strong> — memorizza la lingua scelta dall'utente (durata: 12 mesi)
              </li>
              <li>Cookie di sessione necessari all'autenticazione nell'area riservata (app.trainody.com)</li>
            </ul>
            <p className="mt-4">
              Le statistiche di utilizzo e prestazione del sito sono raccolte tramite Vercel Analytics e Speed Insights, strumenti che non utilizzano cookie e non tracciano l'utente tra siti diversi: i dati raccolti sono aggregati e anonimi. Non utilizziamo cookie di profilazione né strumenti di marketing di terze parti.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Minori</h2>
            <p className="mb-4">
              Il servizio non è destinato a utenti di età inferiore a 16 anni. Non raccogliamo consapevolmente dati di minori senza il consenso dei genitori o del tutore legale. Il personal trainer che intenda seguire un cliente minorenne è tenuto ad acquisire il consenso di chi esercita la responsabilità genitoriale.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Modifiche alla Privacy Policy</h2>
            <p className="mb-4">
              Potremmo aggiornare la presente Privacy Policy per riflettere modifiche normative o del servizio. Le modifiche sostanziali saranno comunicate via email o tramite avviso in piattaforma con congruo anticipo. La data dell'ultima modifica è indicata in testa al documento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contatti</h2>
            <p className="mb-4">
              Per esercitare i propri diritti o per qualsiasi domanda sulla presente Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@trainody.com">info@trainody.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/trainody.app" target="_blank" rel="noopener noreferrer">@trainody.app</a></li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default PrivacyPolicyIT;

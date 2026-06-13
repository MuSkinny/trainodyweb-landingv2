const TermsAndConditionsES = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Términos y Condiciones de Trainody</h1>

          <p className="text-sm text-muted-foreground mb-8">Última modificación: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Objeto y aceptación</h2>
            <p className="mb-4">
              Los presentes Términos y Condiciones ("Términos") regulan el uso de Trainody ("el Servicio", "nosotros", "nuestro"), plataforma de software como servicio (SaaS) que permite a los entrenadores personales gestionar a sus clientes y ofrecer programas de entrenamiento online, accesible a través del sitio trainody.com, la aplicación web app.trainody.com y la app móvil para clientes.
            </p>
            <p className="mb-4">
              El Servicio es ofrecido por Trainody. Al crear una cuenta o utilizar el Servicio, el usuario declara haber leído y aceptado los presentes Términos. Si no aceptas los Términos, no puedes utilizar el Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definiciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{"\"Usuario\": cualquier persona que accede o utiliza el Servicio"}</li>
              <li>{"\"Entrenador Personal\" o \"Entrenador\": el profesional que utiliza el Servicio para gestionar a sus clientes y ofrecer programas de entrenamiento"}</li>
              <li>{"\"Cliente\": la persona que recibe servicios de entrenamiento a través de la plataforma por parte de un Entrenador"}</li>
              <li>{"\"Contenidos\": textos, imágenes, vídeos, rutinas y programas de entrenamiento, anamnesis, mensajes y cualquier otro material subido a la plataforma"}</li>
              <li>{"\"Plan\": el plan de suscripción contratado por el Entrenador (Basic, Pro o Business)"}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Registro y cuenta</h2>

            <h3 className="text-xl font-medium mb-3">3.1 Requisitos de registro</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Los Entrenadores Personales deben ser mayores de edad y poseer las cualificaciones que en su caso exija la normativa aplicable a su actividad profesional</li>
              <li>Los Clientes deben ser mayores de edad; los menores de 18 años solo pueden utilizar el Servicio con el consentimiento de quien ejerza la patria potestad, que deberá recabar el Entrenador</li>
              <li>La información proporcionada durante el registro debe ser veraz, exacta y completa, y mantenerse actualizada</li>
              <li>El Entrenador declara utilizar el Servicio en el ejercicio de su actividad profesional</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 Seguridad de la cuenta</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>El usuario es responsable de la confidencialidad de sus credenciales de acceso y de todas las actividades realizadas a través de su cuenta</li>
              <li>El usuario debe notificarnos de inmediato cualquier acceso no autorizado o violación de seguridad en info@trainody.com</li>
              <li>Está prohibido compartir las credenciales de acceso con terceros o ceder la cuenta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Descripción del Servicio</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Funcionalidades</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Gestión de clientes (perfiles, anamnesis, progresos) para entrenadores personales</li>
              <li>Creación y compartición de rutinas y programas de entrenamiento, con vídeos explicativos</li>
              <li>Seguimiento del progreso en tiempo real</li>
              <li>Chat integrado entrenador-cliente</li>
              <li>Calendario y gestión de citas</li>
              <li>Gestión de pagos online (en los Planes que la incluyen)</li>
              <li>App móvil gratuita para los Clientes (iOS y Android)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Naturaleza del Servicio — exclusión de asesoramiento médico</h3>
            <p className="mb-4">
              Trainody es una herramienta tecnológica de gestión y comunicación. <strong>Trainody no proporciona asesoramiento médico, sanitario ni nutricional</strong> y no es responsable del contenido de los programas de entrenamiento, que son elaborados de forma autónoma por el Entrenador. Antes de iniciar cualquier programa de entrenamiento, se recomienda al Cliente consultar a un médico. El Entrenador es el único responsable de evaluar la aptitud física de sus Clientes y la idoneidad de los programas asignados.
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Limitaciones de uso</h3>
            <p className="mb-2">Está prohibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el Servicio para actividades ilegales o contrarias a los presentes Términos</li>
              <li>Subir contenidos inapropiados, ofensivos, difamatorios o que vulneren derechos de terceros</li>
              <li>Intentar acceder a partes no autorizadas del sistema o eludir las medidas de seguridad</li>
              <li>Interferir con el funcionamiento del Servicio, incluso mediante uso automatizado no autorizado (bots, scraping)</li>
              <li>Utilizar el Servicio para spam o comunicaciones promocionales no autorizadas</li>
              <li>Revender, sublicenciar o poner el Servicio a disposición de terceros más allá de lo previsto por el propio Plan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Planes, pagos y suscripciones</h2>

            <h3 className="text-xl font-medium mb-3">5.1 Planes y precios</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Basic</strong> — gratuito, hasta 2 clientes</li>
              <li><strong>Pro</strong> — 19,90 €/mes, hasta 20 clientes</li>
              <li><strong>Business</strong> — 49,90 €/mes, hasta 50 clientes, con gestión de pagos online incluida</li>
            </ul>
            <p className="mb-4">
              Los precios actualizados y el detalle de las funcionalidades de cada Plan se publican en trainody.com. Los precios incluyen IVA cuando sea aplicable. Nos reservamos el derecho de modificar los precios con un preaviso mínimo de 30 días; la modificación se aplica a partir de la siguiente renovación y el usuario puede desistir antes de que surta efecto.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Facturación y renovación</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Los pagos son procesados por el proveedor Stripe; Trainody no almacena los datos completos de las tarjetas</li>
              <li>La facturación se realiza por adelantado, según la periodicidad del Plan elegido</li>
              <li>La suscripción se renueva automáticamente al final de cada período, salvo cancelación</li>
              <li>En caso de impago, el acceso a las funcionalidades de pago puede suspenderse previo aviso</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Cancelación y desistimiento</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>La suscripción puede cancelarse en cualquier momento desde los ajustes de la cuenta o escribiendo a info@trainody.com</li>
              <li>La cancelación surte efecto al final del período de facturación en curso; no se prevén reembolsos prorrateados por los períodos ya pagados, salvo lo dispuesto por normas imperativas</li>
              <li>Si el usuario tiene la condición de consumidor, goza del derecho de desistimiento en un plazo de 14 días desde la contratación conforme al Código de Consumo italiano, salvo que haya solicitado la ejecución inmediata del servicio y este se haya prestado íntegramente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contenidos y propiedad intelectual</h2>

            <h3 className="text-xl font-medium mb-3">6.1 Titularidad de los contenidos</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Los Entrenadores Personales conservan todos los derechos sobre los Contenidos que crean y suben</li>
              <li>Al subir Contenidos, el Entrenador concede a Trainody una licencia no exclusiva, gratuita y limitada a la duración de la relación, con el único fin de prestar el Servicio (almacenamiento, visualización a los Clientes autorizados, copias de seguridad)</li>
              <li>Trainody y sus licenciantes conservan todos los derechos sobre el software, la interfaz, las marcas y los demás elementos de la plataforma</li>
              <li>Concedemos al usuario una licencia personal, no exclusiva, intransferible y revocable para el uso del Servicio conforme a los presentes Términos</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.2 Responsabilidad sobre los contenidos</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los usuarios son los únicos responsables de los Contenidos que suben</li>
              <li>Los Contenidos deben respetar la ley, incluida la normativa sobre derechos de autor</li>
              <li>Trainody puede eliminar, previa comunicación cuando sea posible, Contenidos inapropiados o ilícitos, y suspender las cuentas implicadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacidad y protección de datos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>El tratamiento de los datos personales se rige por nuestra <a href="/es/privacy-policy">Política de Privacidad</a>, que forma parte integrante de los presentes Términos</li>
              <li>Para los datos de los Clientes introducidos en la plataforma, el Entrenador actúa como responsable del tratamiento independiente y Trainody como encargado del tratamiento conforme al art. 28 RGPD</li>
              <li>El Entrenador garantiza disponer de una base jurídica adecuada para los datos de sus Clientes, incluido el consentimiento explícito para los datos relativos a la salud (anamnesis, condiciones físicas)</li>
              <li>Los datos se gestionan de conformidad con el RGPD</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Garantías y responsabilidad</h2>

            <h3 className="text-xl font-medium mb-3">8.1 Disponibilidad del Servicio</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>El Servicio se proporciona "tal cual" y "según disponibilidad"</li>
              <li>Nos esforzamos por mantener el Servicio operativo y seguro, pero no garantizamos que esté siempre disponible, sea puntual o esté libre de errores; pueden producirse interrupciones por mantenimiento, actualizaciones o causas de fuerza mayor</li>
              <li>Realizamos copias de seguridad periódicas, pero recomendamos a los usuarios conservar copia de los materiales esenciales</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">8.2 Limitación de responsabilidad</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>En la medida permitida por la ley, Trainody no responde de los daños indirectos o consecuentes, ni de la pérdida de beneficios u oportunidades derivados del uso o de la imposibilidad de uso del Servicio</li>
              <li>Trainody no es responsable de lesiones o problemas de salud derivados de la ejecución de los programas de entrenamiento, cuya elaboración y supervisión son competencia exclusiva del Entrenador</li>
              <li>En la medida permitida por la ley, la responsabilidad total de Trainody se limita al importe pagado por el usuario en los 12 meses anteriores al hecho causante del daño</li>
              <li>Nada en los presentes Términos excluye o limita la responsabilidad por dolo o negligencia grave, ni los derechos irrenunciables reconocidos a los consumidores</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Modificaciones del Servicio y de los Términos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nos reservamos el derecho de modificar, suspender o interrumpir el Servicio o partes de él</li>
              <li>Los cambios sustanciales de los presentes Términos se comunicarán por email o mediante aviso en la plataforma con al menos 30 días de antelación</li>
              <li>El uso continuado del Servicio tras la entrada en vigor de los cambios constituye aceptación; en caso de desacuerdo, el usuario puede desistir sin penalización antes de dicha fecha</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Duración, suspensión y resolución</h2>

            <h3 className="text-xl font-medium mb-3">10.1 Resolución por parte del usuario</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>El usuario puede cerrar su cuenta en cualquier momento</li>
              <li>Al cierre, los datos se eliminarán o devolverán según lo previsto en la Política de Privacidad, sin perjuicio de las obligaciones legales de conservación</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">10.2 Suspensión y resolución por parte de Trainody</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Podemos suspender o cerrar las cuentas que violen los presentes Términos, previo requerimiento cuando la violación sea subsanable</li>
              <li>En caso de violaciones graves (actividades ilícitas, compromiso de la seguridad, daño a otros usuarios), la suspensión o el cierre pueden producirse con efecto inmediato</li>
              <li>Quedan a salvo los derechos adquiridos y las cláusulas destinadas por su naturaleza a sobrevivir (propiedad intelectual, limitaciones de responsabilidad, ley aplicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Ley aplicable y jurisdicción</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los presentes Términos se rigen por la ley italiana</li>
              <li>Para los usuarios que actúan como profesionales, será exclusivamente competente el tribunal del domicilio social de Trainody</li>
              <li>Para los usuarios consumidores, será competente el tribunal del lugar de residencia o domicilio del consumidor, conforme al Código de Consumo italiano</li>
              <li>El consumidor puede además recurrir a la plataforma europea de resolución de litigios en línea (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
            <p className="mb-4">Para preguntas sobre los presentes Términos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:info@trainody.com">info@trainody.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/trainody.app" target="_blank" rel="noopener noreferrer">@trainody.app</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Disposiciones finales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>La eventual invalidez de una cláusula no afecta a la validez de las restantes disposiciones</li>
              <li>Los presentes Términos, junto con la Política de Privacidad, constituyen el acuerdo completo entre las partes en relación con el Servicio</li>
              <li>La falta de ejercicio de un derecho no constituye renuncia al mismo</li>
              <li>El usuario no puede ceder los derechos y obligaciones derivados de los presentes Términos sin nuestro consentimiento por escrito</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  export default TermsAndConditionsES;

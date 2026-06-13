const PrivacyPolicyES = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-primary prose-hr:border-border">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad de Trainody</h1>

          <p className="text-sm text-muted-foreground mb-8">Última modificación: 13/06/2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p className="mb-4">
              La presente Política de Privacidad describe cómo Trainody recopila, utiliza, conserva y protege los datos personales de los usuarios de la plataforma de software como servicio (SaaS) dedicada a entrenadores personales y sus clientes, accesible a través del sitio trainody.com, la aplicación web app.trainody.com y la app móvil para clientes.
            </p>
            <p className="mb-4">
              El tratamiento de los datos personales se realiza de conformidad con el Reglamento (UE) 2016/679 ("RGPD") y el Decreto Legislativo italiano 196/2003, modificado por el Decreto Legislativo 101/2018 ("Código de Privacidad italiano").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Responsable del tratamiento</h2>
            <p className="mb-4">
              El responsable del tratamiento es Trainody. Para cualquier cuestión relacionada con la privacidad puedes contactarnos en: <a href="mailto:info@trainody.com">info@trainody.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Roles del tratamiento: Trainody y los Entrenadores Personales</h2>
            <p className="mb-4">
              La plataforma es utilizada por entrenadores personales para gestionar a sus clientes. Por ello es importante distinguir dos roles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trainody como responsable:</strong> para los datos de las cuentas (registro, facturación, registros técnicos, datos de uso de la plataforma), Trainody actúa como responsable del tratamiento.
              </li>
              <li>
                <strong>Trainody como encargado:</strong> para los datos de los clientes finales introducidos por los entrenadores personales (datos personales, anamnesis, mediciones, rutinas de entrenamiento, progresos, mensajes), el entrenador personal actúa como responsable del tratamiento independiente y Trainody como encargado del tratamiento conforme al art. 28 RGPD, tratando dichos datos exclusivamente para prestar el servicio y según las instrucciones del entrenador.
              </li>
            </ul>
            <p className="mt-4">
              El entrenador personal es responsable de disponer de una base jurídica adecuada (p. ej. el consentimiento explícito para los datos relativos a la salud) respecto de los datos de sus clientes que sube a la plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Datos que recopilamos</h2>

            <h3 className="text-xl font-medium mb-3">4.1 Datos proporcionados por el usuario</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Datos de registro: nombre, apellidos, dirección de email, contraseña (almacenada de forma cifrada)</li>
              <li>Información profesional del entrenador personal (p. ej. nombre de la actividad, gimnasio/estudio)</li>
              <li>Datos de contacto y personales de los clientes introducidos por el entrenador</li>
              <li>Rutinas y planes de entrenamiento, notas, vídeos y materiales subidos</li>
              <li>Mediciones físicas, progresos y objetivos de fitness</li>
              <li>Información de anamnesis y documentación relevante para la actividad física, que puede incluir <strong>datos relativos a la salud</strong> (categoría especial de datos según el art. 9 RGPD), tratados solo con una base jurídica adecuada</li>
              <li>Contenido de las comunicaciones en el chat entrenador-cliente</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Datos de pago</h3>
            <p className="mb-4">
              Los pagos de las suscripciones son gestionados por el proveedor Stripe. Trainody no almacena los datos completos de las tarjetas de pago: recibe de Stripe únicamente la información necesaria para gestionar la suscripción (resultado del pago, últimos dígitos de la tarjeta, estado de la suscripción).
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 Datos recopilados automáticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registros de acceso y de sistema</li>
              <li>Dirección IP y país de procedencia (utilizado también para proponer el idioma del sitio)</li>
              <li>Información del dispositivo y del navegador</li>
              <li>Cookies técnicas necesarias para el funcionamiento de la plataforma (véase la sección 11)</li>
              <li>Datos agregados de uso y rendimiento del sitio (analítica sin cookies, véase la sección 11)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Finalidades y bases jurídicas del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Prestación del servicio</strong> (creación y gestión de la cuenta, funcionalidades de la plataforma, comunicación entrenador-cliente, app móvil) — base jurídica: ejecución del contrato (art. 6.1.b RGPD)
              </li>
              <li>
                <strong>Gestión de pagos y facturación</strong> — base jurídica: ejecución del contrato y cumplimiento de obligaciones legales (arts. 6.1.b y 6.1.c RGPD)
              </li>
              <li>
                <strong>Tratamiento de datos relativos a la salud</strong> (anamnesis, condiciones relevantes para el entrenamiento) — base jurídica: consentimiento explícito del interesado (art. 9.2.a RGPD), recabado por el entrenador personal en calidad de responsable
              </li>
              <li>
                <strong>Seguridad de la plataforma</strong> (prevención de accesos no autorizados, abusos y fraudes) — base jurídica: interés legítimo (art. 6.1.f RGPD)
              </li>
              <li>
                <strong>Mejora del servicio</strong> mediante estadísticas agregadas de uso — base jurídica: interés legítimo (art. 6.1.f RGPD)
              </li>
              <li>
                <strong>Comunicaciones de servicio</strong> (avisos técnicos, cambios en los términos, alertas de seguridad) — base jurídica: ejecución del contrato e interés legítimo
              </li>
              <li>
                <strong>Cumplimiento de obligaciones legales</strong> (fiscales, contables, requerimientos de las autoridades) — base jurídica: obligación legal (art. 6.1.c RGPD)
              </li>
            </ul>
            <p className="mt-4">
              La aportación de los datos necesarios para la prestación del servicio es un requisito para el uso de la plataforma: sin ellos no es posible prestar el servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Destinatarios de los datos</h2>
            <p className="mb-2">
              Los datos pueden comunicarse a las siguientes categorías de destinatarios, designados cuando sea necesario como encargados del tratamiento conforme al art. 28 RGPD:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong> — base de datos, autenticación y almacenamiento de los datos de la plataforma</li>
              <li><strong>Vercel</strong> — alojamiento del sitio y de la aplicación web, estadísticas agregadas de uso y rendimiento</li>
              <li><strong>Stripe</strong> — procesamiento de pagos y gestión de suscripciones</li>
              <li><strong>Resend</strong> — envío de emails transaccionales y de servicio</li>
              <li>Entrenadores personales y sus respectivos clientes, dentro de los límites de su relación profesional</li>
              <li>Asesores y proveedores (p. ej. fiscales, legales) dentro de los límites de las finalidades indicadas</li>
              <li>Autoridades competentes, cuando lo exija la ley</li>
            </ul>
            <p className="mt-4">Los datos personales no se venden ni se ceden a terceros con fines de marketing.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Transferencias de datos fuera de la UE</h2>
            <p className="mb-4">
              Los datos se almacenan principalmente en servidores ubicados en la Unión Europea. Algunos de los proveedores indicados tienen su sede en Estados Unidos o pueden tratar datos fuera de la UE: en tales casos la transferencia se realiza sobre la base de una decisión de adecuación de la Comisión Europea (incluido el EU-U.S. Data Privacy Framework, cuando sea aplicable) o de las Cláusulas Contractuales Tipo (SCC), con garantías adicionales cuando sea necesario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Conservación de los datos</h2>
            <p className="mb-2">Los datos personales se conservan durante los siguientes períodos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de la cuenta y contenidos de la plataforma: durante la relación contractual</li>
              <li>Datos de facturación y documentos fiscales: 10 años, en cumplimiento de las obligaciones legales</li>
              <li>Registros técnicos y de seguridad: hasta 12 meses, salvo necesidad de investigar actividades ilícitas</li>
              <li>Datos residuales no esenciales: un máximo de 24 meses desde la finalización del servicio</li>
            </ul>
            <p className="mt-4">
              Al vencer estos plazos, los datos se eliminan o se anonimizan. Al cerrar la cuenta, los datos de los clientes introducidos por el entrenador se eliminan o se devuelven según las instrucciones del propio entrenador, sin perjuicio de las obligaciones legales de conservación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Derechos del interesado</h2>
            <p className="mb-2">Conforme a los arts. 15-22 RGPD, el interesado tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos y obtener copia de ellos</li>
              <li>Rectificar los datos inexactos o incompletos</li>
              <li>Obtener la supresión de sus datos ("derecho al olvido")</li>
              <li>Limitar el tratamiento</li>
              <li>Recibir sus datos en un formato estructurado y de uso común (portabilidad)</li>
              <li>Oponerse al tratamiento basado en el interés legítimo</li>
              <li>Retirar el consentimiento en cualquier momento, sin afectar a la licitud del tratamiento anterior</li>
              <li>Presentar una reclamación ante la autoridad italiana de protección de datos (www.garanteprivacy.it) o ante su autoridad de control local</li>
            </ul>
            <p className="mt-4">
              Las solicitudes pueden enviarse a <a href="mailto:info@trainody.com">info@trainody.com</a>. Responderemos en un plazo de 30 días. Para los datos introducidos por su entrenador personal, el cliente también puede dirigirse directamente al entrenador, en su calidad de responsable del tratamiento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Seguridad de los datos</h2>
            <p className="mb-2">Adoptamos medidas de seguridad técnicas y organizativas adecuadas al riesgo, entre ellas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cifrado de los datos en tránsito (TLS/HTTPS) y en reposo</li>
              <li>Almacenamiento de las contraseñas de forma cifrada (hashing)</li>
              <li>Control de accesos y principio de minimización</li>
              <li>Copias de seguridad periódicas</li>
              <li>Monitorización y procedimientos de gestión de violaciones de seguridad (data breach), con notificación a la autoridad de control y a los interesados en los casos previstos por los arts. 33-34 RGPD</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Cookies y tecnologías similares</h2>
            <p className="mb-2">El sitio utiliza exclusivamente cookies técnicas, para las que no se requiere consentimiento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>NEXT_LOCALE</strong> — almacena el idioma elegido por el usuario (duración: 12 meses)
              </li>
              <li>Cookies de sesión necesarias para la autenticación en el área reservada (app.trainody.com)</li>
            </ul>
            <p className="mt-4">
              Las estadísticas de uso y rendimiento del sitio se recopilan mediante Vercel Analytics y Speed Insights, herramientas que no utilizan cookies y no rastrean al usuario entre sitios distintos: los datos recopilados son agregados y anónimos. No utilizamos cookies de perfilado ni herramientas de marketing de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Menores de edad</h2>
            <p className="mb-4">
              El servicio no está destinado a usuarios menores de 16 años. No recopilamos conscientemente datos de menores sin el consentimiento de los padres o del tutor legal. El entrenador personal que desee entrenar a un cliente menor de edad debe obtener el consentimiento de quien ejerza la patria potestad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Cambios en la Política de Privacidad</h2>
            <p className="mb-4">
              Podemos actualizar la presente Política de Privacidad para reflejar cambios normativos o del servicio. Los cambios sustanciales se comunicarán por email o mediante aviso en la plataforma con antelación razonable. La fecha de la última modificación se indica al inicio del documento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contacto</h2>
            <p className="mb-4">
              Para ejercer tus derechos o para cualquier pregunta sobre esta Política de Privacidad:
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

  export default PrivacyPolicyES;

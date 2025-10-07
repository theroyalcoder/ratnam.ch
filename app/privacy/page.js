import React from "react";

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>Datenschutzbeauftragte Person</h2>
        <p>{`Anusanth Nagaratnam (Anu Ratnam)`}</p>
        <p>
          E-Mail:{" "}
          <a href="mailto:contact@ratnam.ch">contact@ratnam.ch</a>
        </p>
      </section>

      <section>
        <h2>Allgemeines / Einleitung</h2>
        <p>{`Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.`}</p>
        <p>{`In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor unberechtigtem Zugriff, Verlust, Missbrauch oder Verfälschung zu schützen.`}</p>
        <p>{`Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.`}</p>
        <p>{`Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung besucht werden. Daten wie aufgerufene Seiten oder Namen von aufgerufenen Dateien, Datum und Uhrzeit werden zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.`}</p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>{`Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die es ermöglichen, spezifische, auf den Nutzer bezogene Informationen auf dem Endgerät des Nutzers zu speichern, während der Nutzer die Website nutzt. Cookies ermöglichen es insbesondere, die Nutzungshäufigkeit und die Anzahl der Nutzer der Seiten zu ermitteln, Verhaltensmuster der Seitennutzung zu analysieren, aber auch, unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung hinaus gespeichert und können bei einem erneuten Besuch der Seite wieder abgerufen werden. Wenn Sie dies nicht wünschen, sollten Sie Ihren Internet-Browser so einstellen, dass er die Annahme von Cookies verweigert.`}</p>
        <p>
          {`Ein genereller Widerspruch gegen die Verwendung von Cookies zu Online-Marketing-Zwecken kann für eine Vielzahl der Dienste über die US-Seite `}
          <a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer">aboutads.info/choices</a>
          {` oder die EU-Seite `}
          <a href="http://www.youronlinechoices.com/" target="_blank" rel="noreferrer">youronlinechoices.com</a>
          {` erklärt werden. Zudem kann die Speicherung von Cookies in den Browsereinstellungen deaktiviert werden. In diesem Fall sind ggf. nicht alle Funktionen nutzbar.`}
        </p>
      </section>

      <section>
        <h2>Mit SSL/TLS-Verschlüsselung</h2>
        <p>{`Diese Website verwendet aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von `}&quot;http://&quot;{` auf `}&quot;https://&quot;{` wechselt und am Schloss-Symbol.`}</p>
        <p>{`Wenn die SSL-/TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten gelesen werden.`}</p>
      </section>

      <section>
        <h2>Server-Log-Dateien</h2>
        <p>{`Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.`}</p>
        <ul>
          <li>{`Browsertyp und -version`}</li>
          <li>{`Verwendetes Betriebssystem`}</li>
          <li>{`Referrer URL`}</li>
          <li>{`Hostname des zugreifenden Rechners`}</li>
          <li>{`Zeitpunkt der Serveranfrage`}</li>
        </ul>
        <p>{`Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Eine Prüfung behalten wir uns bei konkreten Anhaltspunkten für eine rechtswidrige Nutzung vor.`}</p>
      </section>

      <section>
        <h2>Dienste von Drittanbietern</h2>
        <p>{`Diese Website kann Google Maps, Google Invisible reCAPTCHA und YouTube nutzen. Diese Dienste der Google LLC verwenden u.a. Cookies; Daten können in die USA übertragen werden. Wir gehen davon aus, dass allein durch die Nutzung unserer Website kein personenbezogenes Tracking stattfindet. Weitere Informationen finden Sie in den Datenschutzbestimmungen von Google.`}</p>
      </section>

      <section>
        <h2>Rechte der betroffenen Person</h2>
        <h3>Recht auf Bestätigung</h3>
        <p>{`Sie können eine Bestätigung verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.`}</p>

        <h3>Auskunftsrecht</h3>
        <p>{`Sie haben das Recht auf unentgeltliche Auskunft über die zu Ihrer Person gespeicherten Daten und Kopie davon, inkl. Verarbeitungszwecke, Kategorien, Empfänger, Speicherdauer, Rechte, Beschwerderecht und Herkunft der Daten sowie ggf. Übermittlungen in Drittländer.`}</p>

        <h3>Recht auf Berichtigung</h3>
        <p>{`Sie können die unverzügliche Berichtigung unrichtiger sowie Vervollständigung unvollständiger Daten verlangen.`}</p>

        <h3>Recht auf Löschung</h3>
        <p>{`Sie können die Löschung verlangen, wenn z.B. der Zweck entfällt, die Einwilligung widerrufen wurde, Widerspruch besteht, unrechtmässig verarbeitet wurde, eine rechtliche Pflicht zur Löschung besteht oder Daten bei Diensten der Informationsgesellschaft von Kindern erhoben wurden.`}</p>

        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>{`Sie können die Einschränkung verlangen, wenn die Richtigkeit bestritten wird, die Verarbeitung unrechtmässig ist, die Daten nicht mehr benötigt werden oder ein Widerspruch geprüft wird.`}</p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>{`Sie haben das Recht, personenbezogene Daten in einem strukturierten, gängigen, maschinenlesbaren Format zu erhalten bzw. direkt übermitteln zu lassen, soweit technisch machbar.`}</p>

        <h3>Widerspruchsrecht</h3>
        <p>{`Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einlegen. Bei Direktwerbung gilt dies uneingeschränkt.`}</p>

        <h3>Widerruf von Einwilligungen</h3>
        <p>{`Sie können erteilte Einwilligungen jederzeit widerrufen.`}</p>
      </section>

      <section>
        <h2>Urheberrechte</h2>
        <p>{`Alle Rechte an Inhalten, Bildern, Fotos oder sonstigen Dateien liegen beim Betreiber oder den genannten Rechteinhabern. Jede Vervielfältigung bedarf der schriftlichen Zustimmung. Zuwiderhandlungen können strafbar sein und Schadenersatz nach sich ziehen.`}</p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>{`Alle Angaben wurden sorgfältig geprüft. Gleichwohl kann keine Gewähr für Aktualität, Richtigkeit und Vollständigkeit übernommen werden. Haftungsansprüche aus Nutzung oder Nichtnutzung der Informationen sind ausgeschlossen.`}</p>
        <p>{`Externe Links: Für Inhalte verlinkter Seiten sind ausschliesslich deren Betreiber verantwortlich.`}</p>
      </section>

      <section>
        <h2>Google Analytics</h2>
        <p>{`Diese Website nutzt Google Analytics. Die im Rahmen von Google Analytics übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Diese Website verwendet die Funktion _anonymizeIp(); zur Kürzung der IP-Adresse.`}</p>
        <p>
          {`Opt-out und Browser-Plugin: Informationen unter `}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
            tools.google.com/dlpage/gaoptout
          </a>
          {`.`}
        </p>
      </section>

      <section>
        <h2>LinkedIn</h2>
        <p>{`Wir nutzen Marketing-Dienste von LinkedIn Ireland Unlimited Company. Es werden Cookies eingesetzt. Details und Opt-out: `}
          <a
            href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Retargeting Opt-out
          </a>
          {`.`}
        </p>
      </section>

      <section>
        <h2>Active Campaign (Newsletter)</h2>
        <p>{`Wir nutzen ActiveCampaign, LLC, USA, zum Versand und zur Auswertung von Newslettern. Privacy-Policy: `}
          <a href="https://www.activecampaign.com/privacy-policy/" target="_blank" rel="noreferrer">
            activecampaign.com/privacy-policy
          </a>
          {`.`}
        </p>
        <p>{`Sie können den Newsletter jederzeit abbestellen; danach werden die für den Newsletter gespeicherten Daten gelöscht.`}</p>
      </section>

      <section>
        <h2>Monotype-/Fonts.com-Schriften</h2>
        <p>{`Diese Website nutzt Fonts.com (Monotype Imaging Holdings Inc.) zur Visualisierung von Schriften. Erfasste Daten: Nutzungsdaten und weitere gemäss deren Datenschutzrichtlinie.`}</p>
      </section>

      <section>
        <h2>Datenübermittlung in die USA</h2>
        <p>{`Bei Nutzung von US-Tools können personenbezogene Daten an Server in den USA übertragen werden. Ein angemessenes Schutzniveau ist nicht in allen Fällen gewährleistet.`}</p>
      </section>

      <section>
        <h2>Änderungen</h2>
        <p>{`Wir können diese Datenschutzerklärung jederzeit ohne vorherige Ankündigung ändern. Es gilt die jeweils aktuelle, auf der Website veröffentlichte Fassung. Wenn die Erklärung Teil einer Vereinbarung ist, informieren wir bei Aktualisierungen angemessen.`}</p>
      </section>

      <section>
        <h2>Haftungsausschluss (CH)</h2>
        <p>{`Der Autor übernimmt keine Gewähr für Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit. Haftungsansprüche aus Zugriff, Nutzung/Nichtnutzung, Missbrauch der Verbindung oder technische Störungen sind ausgeschlossen. Alle Angebote sind freibleibend.`}</p>
      </section>

      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>{`Quelle: BrainBox Solutions`}</p>
    </main>
  );
}
import React from "react";

const school = [
    {
        title: "HF-ICT",
        content: (
            <ul>
                <li>Dipl. Techniker HF Informatik</li>
                <li>2015 - 2019 </li>
                <li>Basel-Landschaft, Schweiz</li>
            </ul>
        ),
    },

    {
        title: "GIBM",
        content: (
            <ul>
                <li>Eidg. Fähigkeitszeugnis</li>
                <li>Informatiker EFZ in generalistischer Ausrichtung</li>
                <li>2011 - 2015 </li>
                <li>Basel-Landschaft, Schweiz</li>
            </ul>
        ),
    },

    {
        title: "Basis Plus St. Alban (10. Schuljahr)",
        content: (
            <ul>
                <li>2010 - 2011 </li>
                <li>Basel-Stadt, Schweiz</li>
            </ul>
        ),  
    },

    {
        title: "Obligatorische Schulzeit",
        content: (
            <ul>
                <li>WBS Leonard, 2008 - 2010, Basel-Stadt, Schweiz</li>
                <li>OS Dreirosen, 2005 - 2008, Basel-Stadt, Schweiz</li>
                <li>Primarschule Bläsi, 2001 - 2005, Basel-Stadt, Schweiz</li>
            </ul>
        ),
    },
];

const work = [
    {
            company: "SEMAS IT AG",
            date: "Mai 2025 bis heute",
            title: "IT System Engineer",
            place: "Zug, Schweiz",
            content: ( 
                <ul>
                    <li>ToDo</li>
                </ul>
            ),
        },
    {
            company: "BALTEK GmbH",
            date: "Okt. 2020 - April 2025",
            title: "Senior IT System Engineer",
            place: "Basel, Basel-Stadt, Schweiz",
            content: ( 
                <ul>
                    <li>Planen, Beschaffen und Inbetriebnahme von ICT-Systemen OnPremise und Cloud</li>
                    <li>PC und Peripherie Engineering</li>
                    <li>Server und Netzwerk Engineering</li>
                    <li>Storage- und Archivierung-Engineering</li>
                    <li>ICT Security-Engineering</li>
                    <li>Cloud-Engineering</li>
                    <li>Kundenbetreuung und -pflege</li>
                    <li>Vertriebsunterstützung inhouse und beim Kunden</li>
                    <li>Arbeiten im ICT-Betrieb des Kunden</li>
                    <li>Weitere in diesen Bereich fallende Arbeiten</li>
                </ul>
            ),
        },
    {
            company: "Infors AG",
            date: "Sep. 2016 - Sep. 2020",
            title: "IT-System Spezialist",
            place: "Bottmingen, BL, Schweiz",
            content: ( 
                <ul>
                    <li>Technische Umsetzung und Unterstützung auf folgenden Plattformen: M365, CRM, ERP (Infor COM), Azure, TeamViewer, CI-Sign (Signaturlösung)</li>
                    <li>Technische Betreuung IoT Plattform, Fahrauftrag, DMS, QMS, Intranet Plattform und Unterstützung Redaktionsteam</li>
                    <li>Requirement Engineering von Geschäftsprozessen</li>
                    <li>Technische Konzeption basierend auf Geschäftsanforderungen</li>
                    <li>Probleme als 2nd Level Support lösen</li>
                    <li>Single Point of contact (SPOC): First Level-Support</li>
                    <li>Klassifizieren, Analysieren und Beheben von Incidents, Problemen und Anfragen</li>
                    <li>On-Site Support am Schweizer Standort</li>
                    <li>Bereitstellung von Hardware und Software und internationale Abwicklung von Garantie- und Reparaturfällen</li>
                    <li>Interne Schulungen über die angebotenen IT-Ressourcen wie M365, Citrix Workspace, ERP, VPN, etc.</li>
                </ul>
            ),
        },
    {
            company: "Militär",
            date: "Okt. 2015 - Aug. 2016",
            title: "Wachtmeister (Unteroffizier)",
            place: "Raum Schweiz",
            content: ( 
                <ul>
                    <li>Entwicklung, Wartung und Unterstützung des militärischen Führungs- und Informationssystems (Windows Server-basiert)</li>
                    <li>Ausbildung von Soldaten und Führung einer Gruppe von 8-25 Soldaten</li>
                </ul>
            ),
        },

    {
            company: "save & serve GmbH",
            date: "2011 - 2015",
            title: "Lehre als Informatiker EFZ Generalist",
            place: "Hölstein, BL, Schweiz",
            content: ( 
                <ul>
                    <li>Vollständiges Aufsetzen von Computern, inkl. Hardware und Peripherie</li>
                    <li>Aufbau, Unterhalt und Wartung des firmeneigenen Servers (Windows Server-basiert)</li>
                    <li>Erstellung und Unterhalt eines Onlineshops sowie der Firmenwebseite</li>
                    <li>Kundenbetreuung in allen Belangen der Firma</li>
                </ul>
            ),
        },

];

const certificats = [
    {
        title: "Fortinet FortiGate 7.4 Administrator",
        content: (
            <ul>
                <li>Hersteller: Fortinet</li>
                <li>Nachweis: <a href="https://www.credly.com/badges/052cae8e-e3d7-40ef-8488-3ea8acb565a8/linked_in_profile" target="_blank">Hier klicken</a></li>
            </ul>
        ),
    },

    {
        title: "ITIL Foundation Certificate in IT Service Management",
        content: (
            <ul>
                <li>Hersteller: PeopleCert</li>
                <li>Certificate-lD: GR750521223AN</li>
            </ul>
        ),
    },

    {
        title: "HERMES 5.1 Foundation",
        content: (
            <ul>
                <li>Hersteller: TÜV SÜD</li>
                <li>Certificate-lD: 1812#313181202</li>
            </ul>
        ),
    },
];

const knowledge = [
    {
        title: "IT-Kenntnisse",
        content: (
            <ul>
                <li>Network und IT-Security</li>
                <li>Network Administration</li>
                <li>Firewall: Fortinet / Sophos / Cisco, etc.</li>
                <li>Microsoft 365 Produkte (Exchange Online, Teams, SharePoint, etc.)</li>
                <li>MS Intune, MDM</li>
                <li>MS Azure / Entra</li>
                <li>MS Teams Telefonie</li>
                <li>Veeam Backup &amp; Replication</li>
                <li>Div. RMM Tools</li>
                <li>Windows XP - 11</li>
                <li>Windows Server 2003 - 2025</li>
                <li>MacOS</li>
                <li>Vmware ESXi</li>
                <li>Hyper-V</li>
                <li>Citrix Virtual Apps and Desktops</li>
            </ul>
        ),
    },
];

const codinglanguages = [
    {
        title: "Programmiersprachen",
        content: (
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Maven</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>C++</li>
                <li>PHP</li>
                <li>C#</li>
                <li>PowerShell</li>
                <li>JSON</li>
                <li>Solidity (Ethereum)</li>
            </ul>
        ),
    },
];

const languages = [
    {
        title: "Sprachen",
        content: (
            <ul>
                <li>Tamilisch (Muttersprache)</li>
                <li>Deutsch (Muttersprache)</li>
                <li>Englisch (fliessend)</li>
                <li>Französisch (Small Talk geht)</li>
            </ul>
        ),
    },
];

function Box({ title, children }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            // background: "#fafbfc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            {children}
        </div>
    );
}

export default function CurriculumPage() {
    return (
        <main style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
            <h1>Mein Werdegang & Kompetenzen</h1>
            <h2>Erfahrungen</h2>
            {work.map(({ company, date, title, place, content }) => (
                <Box key={title} title={title}>
                    {company}, ({place}) <br></br>
                    {date}<br></br>
                    {content}
                </Box>
            ))}


            <h2>Schulischer Werdegang</h2>
            {school.map(({ title, content }) => (
                <Box key={title} title={title}>
                    {content}
                </Box>
            ))}
            <h2>Zertifikate</h2>
            {certificats.map(({ title, content }) => (
                <Box key={title} title={title}>
                    {content}
                </Box>
            ))}
            <h2>Fachkenntnisse</h2>
            {knowledge.map(({ title, content }) => (
                <Box key={title} title={title}>
                    {content}
                </Box>
            ))}
            <h2>Programmiersprachen</h2>
            {codinglanguages.map(({ title, content }) => (
                <Box key={title} title={title}>
                    {content}
                </Box>
            ))}
            <h2>Sprachen</h2>
            {languages.map(({ title, content }) => (
                <Box key={title} title={title}>
                    {content}
                </Box>
            ))}
        </main>
    );
}

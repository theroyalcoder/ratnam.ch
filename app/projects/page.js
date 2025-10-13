import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Neue IT-Infrastruktur',
        description: 'Das Projekt verfolgte das Ziel, eine moderne, zuverlässige und zukunftssichere IT-Infrastruktur aufzubauen, um Effizienz, Sicherheit und Kostentransparenz zu verbessern. Die Lösung umfasste hochverfügbare Server- und Speicherlösungen, Schutz vor Ransomware durch immutable Backups sowie Veeam for M365 Backup und Immutable Storage auf MinIO. Der Kunde hatte insgesamt drei Standorte, und die Backup-Daten wurden auf mehrere Standorte verteilt. Technische Hauptkomponenten waren HPE-Server mit VMware, HPE-Storage, Aruba-Switches, Microsoft Defender und Veeam für Server-Backups mit Replikation. Die Projektdienstleistungen beinhalteten Installation, Migration, Backup-Konfiguration, Intune-Integration, Monitoring und Dokumentation. Insgesamt bot die Lösung Flexibilität, Skalierbarkeit und höchste Verfügbarkeit für langfristige Planungssicherheit.',
        image: '/new-it-infra.png',
    },
    {
        id: 2,
        title: 'Übernehme IT-Infrastruktur und Erneuerung Netzwerk',
        description: 'Es wurde eine hochverfügbare, ausfallsichere und skalierbare Netzwerkinfrastruktur mit redundanten 10 Gbit LWL-Verbindungen und HPE Aruba Switches im VSF-Verbund aufgebaut. Zur Erhöhung der Sicherheit kamen Technologien wie Spanning Tree Protocol, DHCP Snooping sowie eine sternförmige Topologie mit Ringstruktur zum Einsatz. Der Helpdesk und das Ticketing wurden übernommen und in ein ITILv4-zertifiziertes Supportsystem integriert. Für die Datensicherheit sorgen tägliche Backups mit Veeam auf Synology NAS und in einer Private Cloud mit Immutable S3 Storage sowie jährliche Restore-Tests. Die gesamte Infrastruktur wird in einem hochsicheren Rechenzentrum in der Schweiz betrieben und die Projektleitung wurde durch mich als Hermes 5-zertifizierte Person übernommen.',
        image: '/network-proj.png',
    },
    {
        id: 3,
        title: 'Umstellung auf Microsoft Teams Telefonie',
        description: 'Wir haben erfolgreich einen den Telefonanschluss unseres internationalen Kunden in der Schweiz auf Microsoft Teams Telefonie umgestellt. Dabei setzten wir Sipcall als Telefonprovider und dessen gehostete Session Border Controller (SBC) ein. Diese reibungslose Umstellung auf VoIP-basierte Kommunikation erweiterte die Kommunikationsmöglichkeiten für die Mitarbeiter und führte zu erheblichen Kosteneinsparungen. Dieses Projekt repräsentiert einen bedeutenden Schritt zur Modernisierung der Kommunikationsinfrastruktur unseres Kunden und zur Förderung der Zusammenarbeit in der Schweizer Niederlassung.',
        image: '/msteams.png',
    },
    {
        id: 4,
        title: 'IT-Infrastrukturprojekte',
        description: 'In meiner Laufbahn habe ich viele IT-Infrastrukturprojekte geleitet. Dazu gehören Setup und Anpassung von Clients, Servern, Netzwerken, Firewalls und Microsoft 365 Tenants. Ich konzentriere mich darauf, massgeschneiderte Lösungen zu schaffen, die exakt den Kundenanforderungen entsprechen. Während der Projekte arbeite ich eng mit meinen Kunden zusammen, um ihre spezifischen Bedürfnisse zu verstehen und individuelle IT-Infrastrukturen zu entwickeln. Die Auswahl der passenden Hardware und Software sowie die Integration der Komponenten stehen im Fokus. Die Implementierung erfolgt in Zusammenarbeit mit unserem Team, um nahtlose Funktionalität und optimale Leistung sicherzustellen. Die Sicherheit der Kundendaten hat höchste Priorität, weshalb ich auch Firewalls und Sicherheitsrichtlinien implementiere.',
        image: '/it-infrastructure-management.jpeg',
        },
    {
        id: 5,
        title: 'Diplomarbeit PWA',
        description: 'Diplomarbeit zum Thema: Effizientes Multitron Incident Management mit Progressive Web App (PWA) und Azure: Ziel der App ist es, die Multitrons (Laborgeräte) via Mobile Device oder Computer zu verwalten und automatisiert Service Cases zu erstellen. Die App wurde in Vue.js geschrieben. Der Auslöser (Trigger), um den automatischen Service Case zu erstellen, wird im Swisscom Device Management Plattform erstellt. Es soll gewisse Informationen in die Azure Cloud senden und durch den von uns erstellten Logic App einen Servicefall in Microsoft Dynamics 365 erstellen, welches das Service Team benachrichtigt.',
        image: '/hfict.png',
        },
    {
        id: 6,
        title: 'NFT Projekt: Prison Ape Gang',
        description: 'Die Prison Ape Gang ist die NFT-Kollektion des in Basel ansässigen Kollektivs Pirate Labs. Wir haben diese Kollektion vor etwa einem Jahr ins Leben gerufen, um zu experimentieren und ein tieferes Verständnis für NFTs zu gewinnen - wie sie funktionieren, wie sie erstellt werden können und welche Auswirkungen sie auf die Welt haben. Dieses experimentelle Unterfangen wurde bald zu einem Herzensprojekt für uns, da wir bestrebt waren, unseren Kreationen Bedeutung und Zweck zu verleihen. Wir haben uns entschieden, das Innocence Project und the Jane Goodall Institute durch unsere Kollektion zu unterstützen und auf ihre wichtige Arbeit und ihren Beitrag zur sozialen Gerechtigkeit und den Schutz der Tiere aufmerksam zu machen. Die NFTs wurden mit der HashLips Engine generiert und mit dem HashLips NFT Contract auf die Polygon Blockchain hochgeladen. Als Gateway zum IPFS wurde NFT.Storage verwendet.',
        image: '/pag.png',
        },
];

export default function ProjectsPage() {
    return (
        <main className="max-w-6xl mx-auto py-16 px-0">
            <h1 className="text-5xl font-extrabold text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_#000] px-4 py-2 mb-12 text-center">Überzeuge dich von meinen Projekten.</h1>
            <div className="grid md:grid-cols-2 gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 flex flex-col">
                        <div className="relative w-full h-48 mb-6 border-4 border-black shadow-[4px_4px_0_0_#000]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="contain"
                                className=""
                            />
                        </div>
                        <h2 className="text-2xl font-extrabold text-black mb-4">{project.title}</h2>
                        <p className="text-lg text-black flex-1">{project.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

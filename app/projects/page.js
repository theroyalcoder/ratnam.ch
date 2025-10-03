import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Eine moderne Portfolio-Webseite mit Next.js und Tailwind CSS.',
        image: '/images/portfolio.jpg',
    },
    {
        id: 2,
        title: 'Blog Plattform',
        description: 'Eine Blogging-Plattform mit Markdown-Unterstützung und Kommentarfunktion.',
        image: '/images/blog.jpg',
    },
    {
        id: 3,
        title: 'E-Commerce Shop',
        description: 'Ein einfacher Online-Shop mit Warenkorb und Zahlungsintegration.',
        image: '/images/shop.jpg',
    },
];

export default function ProjectsPage() {
    return (
        <main className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Meine Projekte</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded shadow p-4">
                        <div className="relative w-full h-40 mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
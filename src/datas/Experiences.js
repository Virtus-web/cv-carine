import LaunchIcon from '@mui/icons-material/Launch';

export const dataExperiences = [
    {
        id: 4,
        title: "Développeur | Chef de projet",
        date: "2022 - en cours",
        location: "Lyon",
        text: `Développement et maintenance de sites applicatifs`,
        missions: [
            {
                id: 1,
                title: "Renault ePds",
                details: [
                    {
                        id: 1,
                        bullet : "Chef de projet et développeur pour assurer la production et la maintenance"
                    },
                    {
                        id: 2,
                        bullet : "Migration de Symfony 3 vers Symfony 5"
                    },
                    {
                        id: 3,
                        bullet : "Implémentation du code sous docker"
                    },
                ]
            },
            {
                id: 2,
                title: "Horis",
                details: [
                    {
                        id: 1,
                        bullet : "Développeur sur un nouveau projet Laravel-Nova"
                    },
                ]
            },
            {
                id: 3,
                title: "Plateforme PDP - Propriétaire",
                details: [
                    {
                        id: 1,
                        bullet : "Création d'un projet de gestion de facturation éléctronique"
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Développement Web - Fullstack",
        date: "2020 - 2022",
        location: "France - Freelance",
        text: `Développement de projets indépendants. Lien portfolio consultable ci-dessous :`,
        missions: [
            {
                id: 1,
                title: "Portfolio",
                url: "https://virtus-web.github.io/developer-portfolio/",
            }
        ]
    },
    {
        id: 2,
        title: "Entreupreneuriat",
        date: "2018 - 2020",
        location: "Australie - A distance",
        text: `Création d'une entreprise de production audiovisuelle`,
        missions: [
            {
                id: 1,
                title: "Gestion d'entreprise",
            },
            {
                id: 2,
                title: "Démarches commerciales",
            }
        ]
    },
    {
        id: 3,
        title: "Communication et Publicité",
        date: "2010 - 2018",
        location: "Paris",
        text: `Evolution professionnelle dans le domaine de l'achat d'espace publicitaire`,
        missions: [
            {
                id: 1,
                title: "2015 - Chef de groupe TV et digital",
            },
            {
                id: 2,
                title: "2012 - Chargé de budget TV et digital",
            },
            {
                id: 3,
                title: "2010 - Acheteur TV junior",
            },
        ]
    },
]

export default dataExperiences

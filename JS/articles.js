// Création d'un objet contenant les projets
const projets = [
    {
        titre: "1- Excel Datasheet Visualizations",
        description: ["Documentation", "Graphics"],
        categorie: "projets_analyst"
    },
    {
        titre: "2- SQL Life Insurance Database Cleansing Requests",
        description: ["Data Cleaning", "Pseudonymization"],
        categorie: "projets_analyst"
    },
    {
        titre: "4- SQL Car Insurance Database Collecting Requests",
        description: ["GDPR Pseudonymization"],
        categorie: "projets_analyst"
    },
    {
        titre: "5- SQL Market Database Analyzis Requests",
        description: ["Data Consistency Check"],
        categorie: "projets_analyst"
    },
    {
        titre: "6- Power BI Dynamique Dashboard Creation",
        description: ["Database Cleaning/Remodeling", "Visualizations", "Access Right Management"],
        categorie: "projets_analyst"
    },
    {
        titre: "7- Python Notebook Market Stock Management Optimization",
        description: ["Data Cleaning", "Exploratory Analysis"],
        categorie: "projets_analyst"
    },
    {
        titre: "8- Python Notebook Real Estate Price Trends Analysis",
        description: ["Data Cleaning", "Exploratory Analysis", "Predictive Algorithmic Forecasting", "Prescriptive Analysis"],
        categorie: "projets_analyst"
    },
    {
        titre: "Not Available - To Be Annonced",
        description: [],
        categorie: "projets_scientist"
    },
    {
        titre: "1- Plot Analysis",
        description: ["1. Curve Analysis", "2. Bar Chart Analysis", "3. Box Plot Analysis", "4. Scatter Plot Analysis"],
        categorie: "Visualisation"
    },
    {
        titre: "2- Analytical Methods and Techniques",
        description: ["1. Exploratory Analysis", "2. Inferential Analysis", "3. Predictive Analytics", "4. Prescriptive Analytics"],
        categorie: "Visualisation"
    },
    {
        titre: "To Be Annonced",
        description: [],
        categorie: "projets_web"
    },
    {
        titre: "1- Java",
        description: ["Parser CSV/XLSX", "Role Play Gaming"],
        categorie: "projets_software"
    },
    {
        titre: "2- C Language",
        description: ["Compiled Programs", "Printf", "Scanf"],
        categorie: "projets_software"
    },
    {
        titre: "3- BASH",
        description: ["Zelda Like Game", "Administrator Tools", "Terminal Command Bash"],
        categorie: "projets_software"
    }
];

// Fonction pour créer dynamiquement des articles
function creerArticle(projet) {
    // Création des éléments HTML
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");

    // Ajout du contenu aux éléments
    h2.textContent = projet.titre;

    // Création d'un élément <li> pour chaque description
    projet.description.forEach(desc => {
        let li = document.createElement("li");
        li.textContent = desc;
        ul.appendChild(li);
    });

    // Ajout des éléments à l'article
    article.append(h2, ul);

    // Ajout d'un événement onclick à l'article
    article.onclick = function() {
        // Créez un nouvel événement personnalisé avec les détails du projet en tant que données
        let event = new CustomEvent('articleClicked', { detail: projet });
        // Déclenchez l'événement
        document.dispatchEvent(event);
    };

    return article;
}

// Fonction pour ajouter les articles à la section correspondante
function ajouterArticles() {
    projets.forEach(projet => {
        let section = document.getElementById(projet.categorie);
        let article = creerArticle(projet);
        section.appendChild(article);
    });
}

// Appel de la fonction ajouterArticles lorsque la page est chargée
document.addEventListener('DOMContentLoaded', ajouterArticles);
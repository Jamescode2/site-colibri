//Testimonial Data
const temoignages = [
    {
      prenom: "Céline",
      temoignage:
        "J'ai fait appel à Héloïse aussi bien comme thérapeute que pour réaliser mon bilan de compétence. En toute sincérité, les résultats sont bien au-dessus de ce à quoi je m'attendais. Héloïse est douce et très pertinente dans ces questionnements. Je sais désormais exactement où je vais professionnellement avec beaucoup de sérénité et de confiance en moi. Merci Héloïse! Je recommande ++++ ",
    },
    {
        prenom: "Stéphanie",
        temoignage:
          "Stress, manque de confiance, gestion des émotions, surcharge mentale... ce sont pleins de sujets qui m'ont amené à pousser la porte d'Héloïse, avec quelques appréhensions je vous l'avoue. J'ai trouvé auprès d'Héloïse une personne très professionnelle qui aime transmettre toutes ses ondes positives mais surtout une personne à l'écoute sans jugement qui nous aide à prendre du recul et à relativiser. MERCI Héloïse ! ",
      },
      {
        prenom: "Zoé",
        temoignage:
          "C'était juste pour vous dire que je suis accepté à l'école de commerce de P. !! Je suis très heureuse! Merci de m'avoir accompagné durant cette année! Merci de m'avoir aidé à avoir confiance en moi!",
      },
      {
        prenom: "Nicole",
        temoignage:
          "Un petit retour sur la mise à profit de tes leçons: Dans l'inquiétude de soins dentaires que je devais faire, un peu longs et délicats,et comme mes dernières expériences chez le dentiste n'étaient pas très heureuses, j'ai décidé de recourir à l'auto-hypnose comme tu nous a initiés (objectif, suggestions). J'ai eu le temps de répéter plusieurs séances quelques semaines avant mon rendez-vous.Et vraiment ça s'est bien passé, j'étais détendue, incroyable ! Alors merci encore pour tous ces outils que tu nous a transmis, c'est vraiment intéressant.",
      },
      {
        prenom: "Maelys",
        temoignage:
          "Merci à Heloise pour sa bienveillance et son soutien. Grâce à elle, j’ai pu activer un grand nombre de ressources et ainsi évoluer positivement. Je recommande à 100% sans hésitation.",
      },
      {
        prenom: "François",
        temoignage:
          "Confronté à un malaise profond au moment de ma cessation d’activité (retraite) qui n’était sans doute qu’un révélateur d’un malaise plus profond j’ai consulté un médecin psychiatre sans vraiment ressentir un bénéfice de la prise en charge proposée.  Sur les conseils d’un ami je vous ai rencontrée et ai trouvé dans votre approche une écoute bienveillante et chaleureuse qui m’a énormément aidé.",
      },
      {
        prenom: "Véronique",
        temoignage:
          "j'ai suivi sa formation auto hypnose, très satisfaite de l'aide que cela m'apporte. personne très chaleureuse, professionnelle. ",
      },
      {
        prenom: "Nathalie",
        temoignage:
          "Je recommande 1000 fois Héloïse ! C'est une personne bienveillante, très à l'écoute, pleine d'ondes positives.elle a été là pour moi à un moment où j'en avais vraiment besoin et aujourd'hui grâce à elle j'ai bien avancé et ce que l'on a travaillé ensemble a été géré. Un grand merci !!! ",
      },
      {
        prenom: "Danielle",
        temoignage:
          "Heloise est très agréable, elle m'a mise à l'aise au premier rendez-vous, j ai passée un bon moment, je suis sorti très zen et le résultat de ma pelade... mes cheveux repoussent des le premier mois et ça continue. Je suis allée 3 fois et moins stressé un grand merci à heloise. je recommande l'hypnose.",
      },
      {
        prenom: "Pierre-Yves",
        temoignage:
          "Grace à ton aide pour me préparer à mon examen médical, j'ai pu supporter ce qui pour moi était une épreuve et permettre au médecin son examen dans les meilleures conditions. Merci encore pour ton aide... Bonne continuation.",
      },
      {
        prenom: "Angeline",
        temoignage:
          "Merci beaucoup Heloise. Je suis ressortie à chaque séance tellement bien, apaisée et pleines d’énergies positives. Héloïse est une personne très agréable et s’adapte à nos besoins. Je la recommande sans problème. D’ailleurs si j’habitais plus près j’aurais fait plus que 2 séances car elle m’a appris beaucoup de choses. ",
      },
      {
        prenom: "Aurell",
        temoignage:
          "Héloïse m'a beaucoup aidé notament à trouver en moi les ressources nécessaires pour traverser une mauvaise passe de ma vie. Personne à l'écoute, on se laisse porter par sa voix les séances sont ressourssantes et agréables. Merci de tout coeur à elle ",
      },
      {
        prenom: "Aurore",
        temoignage:
          "Très pro et pédagogue. J'ai eu la chance de découvrir l'hypnose avec Héloïse pendant mon parcours contre le cancer.Très agréable, chaleureuse ",
      },
                  
  ];
  
  
  let i = 0; 
  let temoignagesContainer = document.getElementById("temoignages-container");


  function ChangeSlide(sens) {
    i = i + sens ; // determine le numero de temoignage à affiché si on clique sur précedent ou suivant
    if (i < 0) //condition si on se trouve sur le 1 er avis et que l'on clique sur précédent
      i= temoignages.length -1; // le témoignages affiché sera donc le dernier
    if (i > temoignages.length -1) //condition si on se trouve sur le dernier avis et que l'on clique sur suivant
      i= 0; // le témoignages affiché sera donc le premier 
      
      temoignagesContainer.innerHTML = `<p>${temoignages[i].temoignage}</p> <p class="nom">${temoignages[i].prenom}</p>`
    }

    window.onload = ChangeSlide(0); // determine à quel témoignages on commence lors du chargement de la page
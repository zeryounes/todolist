


// Sélectionner le bouton "Add To Do"
var addButton = document.querySelector('.btn-add');

// Sélectionner le conteneur des plans
var planContainer = document.querySelector('.container');

// Sélectionner l'élément d'entrée pour le nouveau titre de plan
var newPlanTitleInput = document.getElementById('newPlanTitleInput');





// Gérer l'événement clic sur le bouton "Add To Do"
addButton.addEventListener('click',  function() {
    // Créer une nouvelle div pour le nouveau plan
    var newPlanDiv = document.createElement('div');
    newPlanDiv.classList.add('plan');

    // Créer le contenu de la nouvelle div de plan
    var newPlanTitle = document.createElement('div');
    newPlanTitle.classList.add('plan-title');
    
    // Mettre le contenu du plan-title à partir de la valeur de l'input
    newPlanTitle.textContent = newPlanTitleInput.value;

    var newAddButton = document.createElement('button');
    newAddButton.classList.add('add-plan');

    // Ajouter un gestionnaire d'événement au bouton "add-plan" pour modifier le titre
    newAddButton.addEventListener('click', function() {

    // Demander à l'utilisateur le nouveau titre
        var newTitle = prompt("Entrez le nouveau titre :");

    // Mettre à jour le texte du titre si un nouveau titre est fourni
        if (newTitle !== null && newTitle !== "") {
            newPlanTitle.textContent = newTitle;
        }
    });

    var newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add('delete-plan');

    // Ajouter les éléments à la nouvelle div de plan
    newPlanDiv.appendChild(newPlanTitle);
    newPlanDiv.appendChild(newAddButton);
    newPlanDiv.appendChild(newDeleteButton);

    // Ajouter la nouvelle div de plan au conteneur des plans
    planContainer.appendChild(newPlanDiv);
    newPlanTitleInput.value = ''
    
} );



planContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-plan')) {
        let planDiv = e.target.parentElement;
        planDiv.remove();
    }
});




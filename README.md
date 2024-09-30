<h1> dropdowndelamort </h1>

<br><br><br>
<p align="center">
    <img src="https://img.shields.io/badge/React-v18.3.1-blue">
    <img src="https://img.shields.io/badge/React--DOM-v18.3.1-blue">
    <img src="https://img.shields.io/badge/React--Router--DOM-v6.25.1-blue">
    <img src="https://img.shields.io/badge/license-MIT-green">
    <img src="https://img.shields.io/badge/build-passing-brightgreen">
    <img src="https://img.shields.io/badge/node--lts-18.16.1-brightgreen">
    <br><br><br>
</p>

dropdowndelamort est un composant dropdown pour React permettant de créer facilement des menus déroulants stylisés avec une grande flexibilité.

<h2>À propos</h2>
Ce projet fournit un composant dropdown pour les applications React, permettant aux utilisateurs de sélectionner une option parmi plusieurs choix dans une interface utilisateur intuitive. Le composant utilise React pour la gestion de l'état et Vite pour le développement et la construction.

<h2>Fonctionnalités</h2>
- Menu déroulant stylisé et personnalisable.
- Supporte les options de style via des classes CSS.
- Possibilité de gérer l'état de sélection avec une fonction de rappel onChange.

Pour utiliser dropdowndelamort, assurez-vous d'avoir les éléments suivants installés :
- react: 18.3.1
- react-dom: 18.3.1

<h2>Installation</h2>

npm install dropdowndelamort


<h2>Props</h2>
- **id**: string (optionnel) - Identifiant unique pour le bouton et la liste.<br>
- **selection**: array - Liste des options à afficher dans le menu déroulant.<br>
- **defaultText**: string - Texte par défaut affiché lorsque aucune option n'est sélectionnée.<br>
- **buttonClass**: string - Classe CSS pour le bouton du dropdown.<br>
- **listClass**: string - Classe CSS pour la liste des options.<br>
- **itemClass**: string - Classe CSS pour chaque élément de la liste.<br>
- **value**: string (optionnel) - Valeur par défaut sélectionnée.<br>
- **onChange**: function - Fonction callback appelée lorsque l'utilisateur sélectionne une option.<br>

<h2>Utilisation</h2>

```javascript
import Dropdown from 'dropdowndelamort';
import 'dropdowndelamort/dist/style.css'
import { useState } from 'react';

function MyComponent() {
    const STATES = [
        { value: 'CA', label: 'California' },
        { value: 'NY', label: 'New York' },
        { value: 'TX', label: 'Texas' },
    ];
    
    const STATE_DEFAULT_TEXT = 'Select a state';
    
    const fields = [
        {
            type: 'dropdown',
            id: 'state',
            name: 'state',
            label: 'State',
            options: STATES,
            defaultText: STATE_DEFAULT_TEXT,
        },
    ];

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div>
            {fields.map(field => {
                if (field.type === 'dropdown') {
                    return (
                        <Dropdown
                            key={field.id}
                            id={field.id}
                            selection={field.options}
                            defaultText={field.defaultText}
                            value={selectedValue}
                            onChange={handleChange}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default MyComponent;

 ```


<h2>Licence</h2> Ce projet est sous la licence MIT. Consultez le fichier LICENSE pour plus d'informations.
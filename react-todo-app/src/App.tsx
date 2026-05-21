import TodoList from './components/TodoList'
import './App.css'

export default function App() {
  /*
    1. Dans le même projet, créez un composant TodoList minimal :
        - Affichez une liste de tâches (todo list) gérée avec useState()
        - Ajoutez un champ pour saisir une nouvelle tâche

    2. Ajoutez un en-tête (header) dans TodoList :
        - Affichez le nombre d’items dans la liste
        - Ajoutez un bouton pour trier les tâches par longueur de phrase

    3. Pour chaque todo, affichez un chat aléatoire (image) au chargement du composant :
        - Utilisez l’API https://cataas.com/cat?json=true pour obtenir une image de chat

    => Modifiez ou remplacez le composant TodoList en dessous pour répondre à ces objectifs.
  */

  return (
    <TodoList />
  )
}

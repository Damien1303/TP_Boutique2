export const createError = (status, message) => {
        //Creer une nouvelle instance d' erreur vide
    const error = new Error()
    //Definit le code d'état de l' erreur en fonction du paramètre status
    error.status = status
    //définit le message d' erreur en fonction du paramètre message
    error.message = message
    //rebnvoie l'instance d' erreur personnalisée
    return error
}
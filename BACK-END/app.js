mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connexion à MongoDB réussie!'))
.catch((error) => console.log(error))
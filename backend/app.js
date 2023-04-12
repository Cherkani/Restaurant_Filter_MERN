const express = require('express');
const mongoose = require('mongoose'); // Importer le module mongoose

const app = express();
const cors = require('cors');


app.use(cors());





const EmailSender = require('./controllers/EmailSender');
const cityController = require('./controllers/CityController');
const zoneController = require('./controllers/ZoneController');
const resataurantController = require('./controllers/RestaurantController');


mongoose.connect('mongodb://localhost:27017/location', { // Configurer la connexion à la base de données
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/api/cities', cityController);
app.use('/api/zones', zoneController);
app.use('/api/restaurants', resataurantController);
app.use('/api/Formulaire', EmailSender);



const port =  3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

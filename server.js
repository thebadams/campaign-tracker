/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Campaign, CampaignSession, User, Note } = require('./models');
// const routes = require('./controllers');
// const helpers = require('./utils/');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// const sess = {
//   secret: 'Damn Dude Where You Get That Jacket',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening On port ${PORT}`));
});

import express from 'express';
import path from 'path';
import homeRoutes  from './routes/home';
import basicsRoutes  from './routes/basics';
import handlebarsSyntaxRoutes  from './routes/handlebarsSyntax';
import madlibRoutes from './routes/madlib';
import formDemoRoutes from './routes/form-demo';
import exerciseRoutes from './routes/exercise';

const app = express();

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoutes);
app.use("/", basicsRoutes);
app.use("/", handlebarsSyntaxRoutes);
app.use("/", madlibRoutes);
app.use("/", formDemoRoutes);
app.use("/", exerciseRoutes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));

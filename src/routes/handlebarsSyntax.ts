import express from 'express';

//creates a new router object
const routes = express.Router();

routes.get('/handlebars/demo', (req, res) => {
  const sweet = req.query.sweet as string;

  const jellyBean = {
    color: "yellow",
    flavor: "lemon",
  };
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const jellyBeans = [
    { color: "red", flavor: "cherry" },
    { color: "pink", flavor: "strawberry" },
    { color: "purple", flavor: "grape" },
    { color: "orange", flavor: "orange" }
  ];
  const isSweet = sweet === "yes";

  res.render('handlebars-syntax/syntax-demo', { 
    jellyBean, days, jellyBeans, isSweet
  });
});

routes.get('/handlebars/exercise', (req, res) => {
  const magical = req.query.magical as string;

  const address = {
    street: "1570 Woodward",
    city: "Detroit",
    state: "Michigan"
  };
  const habitats = ["Jungle", "Grassland", "Mountains", "Ocean"];
  const animals = [
    { name: "Whiskers", type: "tiger" },
    { name: "Sylvia", type: "zebra" },
    { name: "Chompers", type: "tortoise" },
    { name: "Clem", type: "walrus" },
  ];
  const isMagical = magical === "yes";

  res.render('handlebars-syntax/syntax-exercise', { 
    address, habitats, animals, isMagical
  });
});

export default routes;
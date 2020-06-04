import express from 'express';
import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';

const routes = express();
const pointsController = new PointsController();
const itemsController = new ItemsController();


// routes.get('/users',(request,response)=>{
//     response.send('Hello World!');
// })

routes.get('/items', itemsController.index);


routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);

export default routes;
import { Router } from 'express';
import { HomeController } from '../controllers/homeController';

const router = Router();

// Home page route
router.get('/', HomeController.getHome);

// About page route
router.get('/about', HomeController.getAbout);

export { router as homeRoutes }; 
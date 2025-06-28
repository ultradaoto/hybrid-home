import { Request, Response } from 'express';

export class HomeController {
  public static async getHome(req: Request, res: Response): Promise<void> {
    try {
      res.render('home', {
        title: 'MyUltra.Coach - Home',
        message: 'Welcome to My Ultra Coach'
      });
    } catch (error) {
      console.error('Error rendering home page:', error);
      res.status(500).send('Internal Server Error');
    }
  }

  public static async getAbout(req: Request, res: Response): Promise<void> {
    try {
      res.render('about', {
        title: 'MyUltra.Coach - About',
        message: 'About My Ultra Coach'
      });
    } catch (error) {
      console.error('Error rendering about page:', error);
      res.status(500).send('Internal Server Error');
    }
  }
} 
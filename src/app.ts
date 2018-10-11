import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (req, res) => {
      res.send('Hello there!');
    });
  }

  private config(): void {
    // Port Setup
    this.app.set('port', process.env.PORT || 3000);

    // Body Parser Config
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    // Using gzip compression
    this.app.use(compression());
  }
}

export const app = new App().app;

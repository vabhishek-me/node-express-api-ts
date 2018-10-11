import { app } from './app';

const server = app.listen(app.get('port'), () => {
  console.log(`API Server running at http://localhost:${app.get('port')} (${app.get('env')})`);
  console.log('Press CTRL-C to stop\n');
});

export default server;

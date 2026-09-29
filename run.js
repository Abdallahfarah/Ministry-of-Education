import { spawn } from 'child_process';

console.log('🚀 Starting Ministry of Education Certificate Portal (ERN Stack)...');

// Start Express Backend
const server = spawn('node', ['server/index.js'], { stdio: 'inherit', shell: true });

// Start Vite Frontend
const client = spawn('npx', ['vite', '--host'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
  server.kill();
  client.kill();
  process.exit();
});

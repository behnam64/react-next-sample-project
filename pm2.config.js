module.exports = {
  apps : [
    {
      name: 'next',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/next/app.js',
      args: 'start',
    }
  ]
};
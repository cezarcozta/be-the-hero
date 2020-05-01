# Be The Hero
  ### Propósito
    Aplicação para conexão entre pessoas que desejam ajudar Ongs de resgate animal em casos especificos, 
    para isso as ongs se cadastram para poderm adicionar casos, contendo um titulo, uma descrição do ocorrido 
    assim como o valor dos gastos com os casos em especifico.
# WEB DEMO
// GIF do App Web Funcionando
# Tecnologias envolvidas
  - Database: #SqLite3 + #KNEX.js ORM
  - Back-end: #Node.js + express.js
  - Front-end: #React.js + #Styled #Components + #Celebrate(validação de inputs)
  - Mobile: #React Native + #Expo
  - Tests: #JEST
# Organização do Projeto
- /backend  
|----/src  
|------/cotrollers  
|--------IncidentController.js   
|--------OngController.js   
|--------ProfileController.js  
|--------SessionController.js    
|------/database  
|--------/migrations  
|----------20200324140408_create_ong.js  
|----------20200324141154_create_incident.js  
|--------connection.js  
|--------db.sqlite  
|--------test.sqlite  
|------/utils  
|--------generateUniqueId.js  
|------app.js  
|------routes.js  
|------server.js  
|----/tests  
|----.gitignore  
|----jest.config.js  
|----knexfile.js  
|----package.lock.json  
|----package.json 
- /frontend  
|----/public  
|------favicon.ico  
|------index.html  
|----/src  
|------/assets  
|--------heroes.png   
|--------logo.svg    
|------/pages  
|--------/Logon  
|----------index.js  
|----------styles.css  
|--------/NewIncident   
|----------index.js  
|----------styles.css  
|--------/Profile    
|----------index.js  
|----------styles.css  
|--------/Register  
|----------index.js  
|----------styles.css   
|--------/services    
|----------api.js  
|------App.js  
|------global.css  
|------index.js  
|------routes.js  
|----.gitignore  
|----package.lock.json  
|----package.lock  
|----yarn.json 
- /mobile
# Fomentado por
- RocketSeat => https://rocketseat.com.br/
    Semana OmniStack 11

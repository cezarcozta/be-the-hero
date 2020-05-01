# Be The Hero
  ### Propósito
    Aplicação para conexão entre pessoas que desejam ajudar Ongs de resgate animal em casos especificos, 
    para isso as ongs se cadastram para poderm adicionar casos, contendo um titulo, uma descrição do ocorrido 
    assim como o valor dos gastos com os casos em especifico.
# WEB DEMO
(https://raw.githubusercontent.com/cezarcozta/be-the-hero/005ca112b95147916c474e48de807f1b2e1a8a22/frontend/src/assets/logo.svg)
# Tecnologias envolvidas
  - Database: SQLite3 + KNEX.js ORM
  - Back-end: Node.js + Express.js
  - Front-end: React.js + Styled#Components + Celebrate(validação de inputs)
  - Mobile: React Native + Expo
  - Tests: JEST
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
|----package-lock.json  
|----package.json    
|----yarn.json 
- /mobile  
|----/.expo-shared  
|------assests.json     
|----/assetes   
|------icon.png    
|------splash.png    
|----/src    
|------/assets    
|--------logo.png     
|--------logo@2x.png    
|--------logo@3x.png    
|------/pages    
|--------/Detail    
|----------index.js    
|----------styles.js    
|--------/Incident     
|----------index.js    
|----------styles.js      
|--------/services      
|----------api.js    
|--------routes.js    
|----.gitignore   
|------App.js    
|------app.json    
|------babel.config.js    
|----package-lock.json    
|----package.json    
|----yarn.json   
# Fomentado por
- RocketSeat => https://rocketseat.com.br/  
    Semana OmniStack 11  

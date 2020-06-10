# Be The Hero
  #### Propósito
    Aplicação para conexão via whatsapp ou e-mail entre pessoas que 
    desejam ajudar financeiramente e Ongs de resgate  
    animal que necessitam cobrir custos com: transporte, estadia, 
    alimentação, veterinário entre outras despesas   
    relacionadas aos resgates de  animais em situação de abandono.  
    Com o app web Be The Hero as Ongs de resgate animal se cadastram 
    com: nome, endereço e telefone para poderem 
    adicionar casos de resgate com seus custos, esses casos contendo 
    um titulo, uma descrição do ocorrido assim como o valor gasto com as 
    despesas do resgate.    
    Já o app mobile qualquer pessoa que instalar no smartphone pode 
    acessar uma listagem de casos de resgate com o seu valor, e-mail, 
    assim como um botão para envio de mensagem direto para whatsapp da 
    Ong resposável por tal resgate.  

# Identidade Visual  

![](https://github.com/cezarcozta/be-the-hero/blob/master/frontend/src/assets/heroes.png?raw=true)
![](https://raw.githubusercontent.com/cezarcozta/be-the-hero/005ca112b95147916c474e48de807f1b2e1a8a22/frontend/src/assets/logo.svg)  

# Tecnologias envolvidas  

  - **Database:** SQLite3 + KNEX.js ORM
  - **Back-end:** Node.js + Express.js
  - **Front-end:** React.js + Styled Components + Celebrate
  - **Mobile:** React Native + Expo
  - **Tests:** JEST  
  - **Operational System:** Ubuntu 18.04 LTS  

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
|------/integration  
|--------icident.spec.js  
|--------ong.spec.js  
|------/unit  
|--------generateUniqueId.spec.js    
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

# Rodando o Projeto  

>Pré-requisitos: yarn package manager.   

**clone o repositório**   

`
git clone https://www.github.com/cezarcozta/be-the-hero  
`  

**acesse a pasta do projeto**  
`
cd /be-the-hero  
`  

**/backend**  

```zsh
cd /backend  
yarn     
yarn start
```  
> http://localhost:3333/  

**/frontend**  

```zsh
cd /frontend  
yarn  
yarn start
```  
> http://localhost:3000/  

**/mobile**  

```zsh
cd /mobile  
yarn
yarn start
```  
> Baixe e instale o EXPO no seu smartphone, acesse o EXPO e escaneie o QRCode do terminal ou escaneie em http://localhost:19002/  

**Ajustando acesso a api**  

```zsh
/mobile/src/services/api.js
```

![](https://github.com/cezarcozta/be-the-hero/blob/master/mobile/src/assests/tela.png)  

```javascript
const api = axios.create({
    baseURL: 'http://192.168.1.105:3333',
});
```  

# Desenvolvido por  

- :rocket::rocket::rocket: [RocketSeat](https://rocketseat.com.br/)  
    Semana OmniStack 11  

# Apresentado por  

- [Diego Fernandes](https://github.com/diego3g)  

# Reproduzido por  

- César Augusto Costa :sunglasses: :sunglasses: :sunglasses:    
:: cezarcozta@gmail.com  
:: [Linkedin/cezarcozta](www.linkedin.com/in/cezarcozta)  
:: [Twitter@cezarcozta](www.twitter.com/cezarcozta)  
:: [Instagram@cezarcozta](www.instagram.com/cezarcozta)  
:: [Facebook/cezarcozta](www.facebook.com/cezarcozta)  

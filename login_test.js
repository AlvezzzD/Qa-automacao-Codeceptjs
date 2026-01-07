Feature('login');

//cenario 1
Scenario('login com sucesso',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'theusluck@gmail.com')
    I.fillField('#password', 'QWERTY@123')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@sucesso')

//cenario 2
Scenario('login digitando apenas o email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'theusluck@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)
})

//cenario 3
Scenario('login sem digitar email e senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)
})

//cenario 4
Scenario('login digitando apenas a senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#password', 'QWERTY@123')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)
});


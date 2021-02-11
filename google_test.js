Feature('Google');

const assert = require('assert');

Scenario('Pesquisar QAzando no Google', async ({ I }) => {
    I.amOnPage('/')

    var titulo = await I.grabTitle()
    assert.equal(titulo, 'Googlex')

    //I.fillField('.gLFyf', 'qazando')
    I.fillField({name: 'q'}, 'qazando')
    I.click('.gNO89b')

    I.see('www.qazando.com.br')
});

const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser numero negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
        test('inicio nao pode ser numero negativo', () => {
            expect(gerarNumeroAleatorio(-5, 20))
                .toBe(-1);
        });
        test('inicio nao pode ser maior que fim', () => {
            expect(gerarNumeroAleatorio(20, 10))
                .toBe(-1);
        });
        test('deve retornar número gerado', () => {
            const gera = gerarNumeroAleatorio(10, 20)

            expect(gera)
                .toBeGreaterThanOrEqual(10)

            expect(gera)
                .toBeLessThanOrEqual(20);
        });
    });


    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(4, 'abcde', 'c'))
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
        test('caractere nao encontrado na cadeia', () => {
            expect(acharCaracter(20, 'abcdeabcdxeabcdeabcd', 'y'))
                .toBe('caracter não encontrado');
        });
        test('comprimento diferente do nomral',()=>{
            expect(acharCaracter(20, 'abcdeabcdxeabcdeabcd', 'x'))
            .toBe(9)
        })
        
        test('posicao do caractere',()=>{
            expect(acharCaracter(20,'asdaseqweqwe','c'))
            .toBe('comprimento fornecido diferente do comprimento real')
        })
    });    
});
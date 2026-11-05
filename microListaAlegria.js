// SENAI — JAVASCRIPT
// LISTA DE ATIVIDADES: OPERADORES, CONDIÇÕES E LÓGICA
// 30 EXERCÍCIOS — DO BÁSICO AO DESAFIADOR

// ============================================================
// NÍVEL 1 — PRIMEIRAS DECISÕES (01 A 10)
// ============================================================

// 01. MAIOR DE IDADE
// Código inicial:
// let idade = 17;
// Tarefa: mostre "Maior de idade" se idade >= 18; caso contrário,
// mostre "Menor de idade".
// Dicas:
// - Comece por if (idade >= 18).
// - Use else para o caso contrário.
// - Não precisa criar outra variável.
// Teste extra: idade = 18 e depois idade = 25.

{
    let idade = 17;

    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}

// 02. NÚMERO POSITIVO, NEGATIVO OU ZERO
// Código inicial:
// let numero = -8;
// Tarefa: classifique o número como positivo, negativo ou zero.
// Dicas:
// - Existem três resultados possíveis: use if, else if e else.
// - Primeiro compare com zero usando >.
// - Depois compare usando <.
// Teste extra: numero = 0 e numero = 12.

{
    let numero = -8;

    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

// 03. PAR OU ÍMPAR
// Código inicial:
// let numero = 23;
// Tarefa: exiba se o número inteiro é par ou ímpar.
// Dicas:
// - O operador % calcula o resto da divisão.
// - Um inteiro é par quando numero % 2 === 0.
// - Use else para informar ímpar.
// Teste extra: numero = 24 e numero = 0.

{
    let numero = 23;

    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

// 04. MAIOR ENTRE DOIS NÚMEROS
// Código inicial:
// let a = 35;
// let b = 42;
// Tarefa: informe se a é maior, se b é maior ou se os dois são iguais.
// Dicas:
// - Faça primeiro a comparação a > b.
// - No else if, verifique a < b.
// - Se nenhuma delas for verdadeira, os valores são iguais.
// Teste extra: a = 42; b = 42.

{
    let a = 35;
    let b = 42;

    if (a > b) {
        console.log("A é maior");
    } else if (a < b) {
        console.log("B é maior");
    } else {
        console.log("Os dois são iguais");
    }
}

// 05. ENTRADA EM EVENTO
// Código inicial:
// let idade = 20;
// let ingressoValido = true;
// Tarefa: autorize entrada somente com idade >= 18 E ingresso válido.
// Dicas:
// - São duas exigências simultâneas: use &&.
// - ingressoValido já é booleano: pode usá-lo diretamente.
// - Tenha um else para "Entrada negada".
// Teste extra: idade = 16; ingressoValido = true.

{
    let idade = 20;
    let ingressoValido = true;

    if (idade >= 18 && ingressoValido) {
        console.log("Entrada autorizada");
    } else {
        console.log("Entrada negada");
    }
}

// 06. DESCONTO VIP
// Código inicial:
// let valorCompra = 150;
// let clienteVIP = true;
// Tarefa: aplique 20% de desconto quando a compra for >= 200 OU
// quando o cliente for VIP. Caso contrário, mantenha o valor original.
// Dicas:
// - Use ||, pois basta uma condição.
// - Desconto de 20%: valorCompra * 0.20.
// - Valor final: valorCompra - desconto.
// - Exiba o valor final com template literal e toFixed(2).
// Teste extra: valorCompra = 150; clienteVIP = false.

{
    let valorCompra = 150;
    let clienteVIP = true;
    let desconto = 0;

    if (valorCompra >= 200 || clienteVIP) {
        desconto = valorCompra * 0.20;
    }

    let valorFinal = valorCompra - desconto;
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}

// 07. FAIXA DE TEMPERATURA
// Código inicial:
// let temperatura = 85;
// Tarefa: abaixo de 40: "Baixa"; de 40 a 80 (inclusive): "Normal";
// acima de 80: "Superaquecimento".
// Dicas:
// - Pode testar temperatura < 40 primeiro.
// - Em seguida, temperatura <= 80 resolve a faixa intermediária.
// - O else restante é acima de 80.
// Teste extra: temperatura = 40 e temperatura = 80.

{
    let temperatura = 85;

    if (temperatura < 40) {
        console.log("Baixa");
    } else if (temperatura <= 80) {
        console.log("Normal");
    } else {
        console.log("Superaquecimento");
    }
}

// 08. APROVAÇÃO ESCOLAR
// Código inicial:
// let nota = 8;
// let frequencia = 80;
// Tarefa: aprove somente quem tiver nota >= 7 E frequência >= 75.
// Dicas:
// - Uma condição sozinha não basta.
// - Combine as duas com &&.
// - Exiba "Aprovado" ou "Reprovado".
// Teste extra: nota = 10; frequencia = 60.

{
    let nota = 8;
    let frequencia = 80;

    if (nota >= 7 && frequencia >= 75) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// 09. CLASSIFICAÇÃO POR IDADE
// Código inicial:
// let idade = 17;
// Tarefa: 0 a 12: Criança; 13 a 17: Adolescente;
// 18 a 59: Adulto; 60 ou mais: Idoso.
// Dicas:
// - Antes de classificar, trate idade negativa como "Idade inválida".
// - Teste as faixas em ordem crescente usando else if.
// - Depois de verificar idade <= 12, não é preciso repetir idade >= 13.
// Teste extra: idade = -1, 12, 18 e 60.

{
    let idade = 17;

    if (idade < 0) {
        console.log("Idade inválida");
    } else if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 59) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}

// 10. ACESSO AO LABORATÓRIO
// Código inicial:
// let horario = 19;
// let autorizado = true;
// Tarefa: permita acesso somente com autorização e horário de 8 a 18,
// inclusive.
// Dicas:
// - A faixa exige horario >= 8 && horario <= 18.
// - Combine o resultado com autorizado usando outro &&.
// - Fora disso, exiba "Acesso negado".
// Teste extra: horario = 8 e depois horario = 18.

{
    let horario = 19;
    let autorizado = true;

    if (autorizado && horario >= 8 && horario <= 18) {
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }
}

// ============================================================
// NÍVEL 2 — COMBINANDO REGRAS (11 A 20)
// ============================================================

// 11. EMPRÉSTIMO BANCÁRIO
// Código inicial:
// let renda = 4500;
// let possuiRestricao = false;
// Tarefa: aprove o empréstimo quando renda >= 3000 E não houver
// restrição cadastral.
// Dicas:
// - O operador ! significa NÃO.
// - Escreva !possuiRestricao dentro da condição.
// - Use && para reunir as exigências.
// Teste extra: renda = 2500; possuiRestricao = false.

{
    let renda = 4500;
    let possuiRestricao = false;

    if (renda >= 3000 && !possuiRestricao) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}

// 12. FRETE GRÁTIS
// Código inicial:
// let totalCompra = 180;
// let cupomFrete = true;
// Tarefa: frete é grátis para compras >= 250 OU com cupom ativo.
// Caso contrário, o frete custa R$ 25. Mostre o total a pagar.
// Dicas:
// - Crie let frete = 25.
// - No if, altere frete para 0 quando uma das regras for atendida.
// - Total = totalCompra + frete.
// Teste extra: totalCompra = 100; cupomFrete = false.

{
    let totalCompra = 180;
    let cupomFrete = true;
    let frete = 25;

    if (totalCompra >= 250 || cupomFrete) {
        frete = 0;
    }

    let totalPagar = totalCompra + frete;
    console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);
}

// 13. NÍVEL DO JOGADOR
// Código inicial:
// let pontos = 750;
// Tarefa: menos de 100: Iniciante; 100 a 499: Bronze;
// 500 a 999: Prata; a partir de 1000: Ouro.
// Dicas:
// - Use uma cadeia de if / else if / else.
// - Compare começando pela menor faixa.
// - A última opção pode ficar no else.
// Teste extra: pontos = 99, 100, 500 e 1000.

{
    let pontos = 750;

    if (pontos < 100) {
        console.log("Iniciante");
    } else if (pontos < 500) {
        console.log("Bronze");
    } else if (pontos < 1000) {
        console.log("Prata");
    } else {
        console.log("Ouro");
    }
}

// 14. SENHA E USUÁRIO
// Código inicial:
// let usuario = "aluno";
// let senha = "senai123";
// Tarefa: libere acesso só se usuario for "aluno" E senha for
// "senai123".
// Dicas:
// - Textos podem ser comparados com ===.
// - Maiúsculas e minúsculas fazem diferença.
// - Use && para conferir as duas informações.
// Teste extra: senha = "SENAI123".

{
    let usuario = "aluno";
    let senha = "senai123";

    if (usuario === "aluno" && senha === "senai123") {
        console.log("Acesso liberado");
    } else {
        console.log("Acesso negado");
    }
}

// 15. SEMÁFORO
// Código inicial:
// let cor = "amarelo";
// Tarefa: verde -> "Siga"; amarelo -> "Atenção";
// vermelho -> "Pare"; qualquer outra cor -> "Cor inválida".
// Dicas:
// - Compare strings com ===.
// - Use if, else if e else (não use switch ainda).
// - Uma variável pode ser comparada com vários textos.
// Teste extra: cor = "azul" e cor = "verde".

{
    let cor = "amarelo";

    if (cor === "verde") {
        console.log("Siga");
    } else if (cor === "amarelo") {
        console.log("Atenção");
    } else if (cor === "vermelho") {
        console.log("Pare");
    } else {
        console.log("Cor inválida");
    }
}

// 16. DIA ÚTIL OU FIM DE SEMANA
// Código inicial:
// let dia = 6;
// Tarefa: números de 1 a 5 são dias úteis; 6 e 7 são fim de
// semana; outros valores são inválidos.
// Dicas:
// - Verifique primeiro se dia < 1 OU dia > 7.
// - Depois confira se dia <= 5.
// - Use else para o fim de semana.
// Teste extra: dia = 0, 1, 5 e 7.

{
    let dia = 6;

    if (dia < 1 || dia > 7) {
        console.log("Dia inválido");
    } else if (dia <= 5) {
        console.log("Dia útil");
    } else {
        console.log("Fim de semana");
    }
}

// 17. PODE DIRIGIR?
// Código inicial:
// let idade = 22;
// let possuiCNH = false;
// Tarefa: informe se a pessoa pode dirigir considerando idade >= 18
// E possuir CNH.
// Dicas:
// - Combine condições com &&.
// - No caso negativo, mostre qual requisito falta.
// - Você pode usar else if para separar os motivos.
// Teste extra: idade = 17; possuiCNH = true.

{
    let idade = 22;
    let possuiCNH = false;

    if (idade < 18) {
        console.log("Não pode dirigir: idade mínima não atingida");
    } else if (!possuiCNH) {
        console.log("Não pode dirigir: não possui CNH");
    } else {
        console.log("Pode dirigir");
    }
}

// 18. ESTOQUE DE PRODUTO
// Código inicial:
// let estoque = 4;
// let quantidadePedida = 6;
// Tarefa: informe "Venda autorizada" se a quantidade pedida for
// positiva E não ultrapassar o estoque. Caso contrário, explique.
// Dicas:
// - Primeiro trate quantidadePedida <= 0 como pedido inválido.
// - Depois verifique quantidadePedida <= estoque.
// - Só calcule novo estoque se a venda for autorizada.
// Teste extra: quantidadePedida = 4 e quantidadePedida = 0.

{
    let estoque = 4;
    let quantidadePedida = 6;

    if (quantidadePedida <= 0) {
        console.log("Pedido inválido");
    } else if (quantidadePedida <= estoque) {
        estoque = estoque - quantidadePedida;
        console.log("Venda autorizada");
        console.log(`Estoque restante: ${estoque}`);
    } else {
        console.log("Venda não autorizada: estoque insuficiente");
    }
}

// 19. BOLETIM COM RECUPERAÇÃO
// Código inicial:
// let nota = 5.8;
// let frequencia = 82;
// Tarefa: se frequência < 75, "Reprovado por frequência".
// Caso contrário: nota >= 7 -> Aprovado;
// nota >= 5 e < 7 -> Recuperação;
// nota < 5 -> Reprovado por nota.
// Dicas:
// - Verifique a frequência primeiro.
// - Dentro dos demais casos, organize os testes da maior nota para a menor.
// - Não repita comparações desnecessárias.
// Teste extra: nota = 10; frequencia = 70.

{
    let nota = 5.8;
    let frequencia = 82;

    if (frequencia < 75) {
        console.log("Reprovado por frequência");
    } else if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado por nota");
    }
}

// 20. DESCONTO POR FAIXA
// Código inicial:
// let valorCompra = 380;
// Tarefa: compra abaixo de R$ 100: sem desconto;
// de R$ 100 até menos de R$ 300: 5%; de R$ 300 a menos de
// R$ 500: 10%; R$ 500 ou mais: 15%.
// Dicas:
// - Guarde a porcentagem em let percentual = 0.
// - No if / else if, atribua 0.05, 0.10 ou 0.15.
// - Valor do desconto = valorCompra * percentual.
// - Mostre desconto e total com duas casas decimais.
// Teste extra: valorCompra = 99, 100, 300 e 500.

{
    let valorCompra = 380;
    let percentual = 0;

    if (valorCompra < 100) {
        percentual = 0;
    } else if (valorCompra < 300) {
        percentual = 0.05;
    } else if (valorCompra < 500) {
        percentual = 0.10;
    } else {
        percentual = 0.15;
    }

    let desconto = valorCompra * percentual;
    let total = valorCompra - desconto;

    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

// ============================================================
// NÍVEL 3 — DESAFIOS COM VÁRIAS CONDIÇÕES (21 A 30)
// ============================================================

// 21. TRIÂNGULO VÁLIDO
// Código inicial:
// let ladoA = 3;
// let ladoB = 4;
// let ladoC = 5;
// Tarefa: descubra se os três comprimentos podem formar um triângulo.
// Dicas:
// - Todos os lados devem ser maiores que zero.
// - A soma de quaisquer dois lados deve ser maior que o terceiro.
// - Combine as três comparações com &&.
// Teste extra: lados 1, 2 e 3 (não formam triângulo).

{
    let ladoA = 3;
    let ladoB = 4;
    let ladoC = 5;

    if (
        ladoA > 0 &&
        ladoB > 0 &&
        ladoC > 0 &&
        ladoA + ladoB > ladoC &&
        ladoA + ladoC > ladoB &&
        ladoB + ladoC > ladoA
    ) {
        console.log("Forma um triângulo válido");
    } else {
        console.log("Não forma um triângulo válido");
    }
}

// 22. TIPO DE TRIÂNGULO
// Código inicial:
// let ladoA = 6;
// let ladoB = 6;
// let ladoC = 4;
// Tarefa: primeiro confirme se forma triângulo. Se formar,
// classifique: Equilátero (3 lados iguais), Isósceles (2 iguais)
// ou Escaleno (todos diferentes).
// Dicas:
// - Reutilize as regras do exercício 21.
// - Use === para comparar lados.
// - Para isósceles, verifique A === B || A === C || B === C.
// - Teste equilátero ANTES de isósceles.
// Teste extra: 5,5,5; 3,4,5; 1,1,3.

{
    let ladoA = 6;
    let ladoB = 6;
    let ladoC = 4;

    if (
        ladoA > 0 &&
        ladoB > 0 &&
        ladoC > 0 &&
        ladoA + ladoB > ladoC &&
        ladoA + ladoC > ladoB &&
        ladoB + ladoC > ladoA
    ) {
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Equilátero");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Isósceles");
        } else {
            console.log("Escaleno");
        }
    } else {
        console.log("Não forma um triângulo válido");
    }
}

// 23. CÁLCULO DE IMC (EXERCÍCIO DE PROGRAMAÇÃO)
// Código inicial:
// let peso = 72;
// let altura = 1.75;
// Tarefa: calcule imc = peso / (altura ** 2) e classifique:
// abaixo de 18.5: Abaixo do peso;
// de 18.5 a menos de 25: Faixa considerada normal;
// de 25 a menos de 30: Sobrepeso;
// 30 ou mais: Obesidade.
// Dicas:
// - Antes de dividir, confira peso > 0 e altura > 0.
// - Mostre o IMC com toFixed(2).
// - Essas categorias são uma simplificação didática para adultos;
//   não representam diagnóstico individual.
// Teste extra: altura = 0 para validar o erro.

{
    let peso = 72;
    let altura = 1.75;

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura ** 2);
        console.log(`IMC: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Abaixo do peso");
        } else if (imc < 25) {
            console.log("Faixa considerada normal");
        } else if (imc < 30) {
            console.log("Sobrepeso");
        } else {
            console.log("Obesidade");
        }
    } else {
        console.log("Peso e altura devem ser maiores que zero");
    }
}

// 24. TARIFA DE ESTACIONAMENTO
// Código inicial:
// let horas = 5;
// let clienteConveniado = true;
// Tarefa: até 2 horas custa R$ 10. Cada hora adicional
// (iniciada) custa R$ 4. Conveniados recebem 20% de desconto.
// Dicas:
// - Considere horas como número inteiro positivo neste exercício.
// - Primeiro rejeite horas <= 0.
// - Se horas > 2, calcule 10 + (horas - 2) * 4.
// - Depois aplique desconto se clienteConveniado for true.
// - Exiba o valor final em reais com toFixed(2).
// Teste extra: horas = 2; clienteConveniado = false.

{
    let horas = 5;
    let clienteConveniado = true;

    if (horas <= 0) {
        console.log("Quantidade de horas inválida");
    } else {
        let valor = 10;

        if (horas > 2) {
            valor = 10 + (horas - 2) * 4;
        }

        if (clienteConveniado === true) {
            valor = valor * 0.80;
        }

        console.log(`Valor final: R$ ${valor.toFixed(2)}`);
    }
}

// 25. VELOCIDADE NA VIA
// Código inicial:
// let velocidade = 92;
// let limite = 80;
// Tarefa: velocidade até o limite -> "Dentro do limite";
// acima do limite até 20% -> "Acima do limite";
// mais de 20% -> "Muito acima do limite".
// Dicas:
// - Calcule limite * 1.20 para achar a marca de 20%.
// - Compare primeiro velocidade <= limite.
// - Depois velocidade <= limite * 1.20.
// - Trata-se de uma classificação fictícia, não de cálculo legal de multa.
// Teste extra: velocidade = 80, 96 e 97.

{
    let velocidade = 92;
    let limite = 80;

    if (velocidade <= limite) {
        console.log("Dentro do limite");
    } else if (velocidade <= limite * 1.20) {
        console.log("Acima do limite");
    } else {
        console.log("Muito acima do limite");
    }
}

// 26. BOLSA DE ESTUDOS
// Código inicial:
// let media = 9.1;
// let frequencia = 92;
// let rendaFamiliar = 2400;
// Tarefa: bolsa integral se média >= 9 E frequência >= 90 E
// renda familiar <= 2500; bolsa parcial se média >= 7 E
// frequência >= 75 E renda familiar <= 4000; caso contrário,
// sem bolsa.
// Dicas:
// - Comece pela bolsa integral, que é mais exigente.
// - Use três condições unidas por &&.
// - No else if, teste a bolsa parcial.
// Teste extra: média = 8; frequência = 80; renda = 3000.

{
    let media = 9.1;
    let frequencia = 92;
    let rendaFamiliar = 2400;

    if (media >= 9 && frequencia >= 90 && rendaFamiliar <= 2500) {
        console.log("Bolsa integral");
    } else if (media >= 7 && frequencia >= 75 && rendaFamiliar <= 4000) {
        console.log("Bolsa parcial");
    } else {
        console.log("Sem bolsa");
    }
}

// 27. SISTEMA DE LOGIN COM BLOQUEIO
// Código inicial:
// let usuario = "admin";
// let senha = "1234";
// let tentativas = 2;
// Tarefa: se tentativas >= 3, exiba "Conta bloqueada".
// Caso contrário, só permita login para usuario === "admin"
// E senha === "1234". Em outros casos, exiba "Credenciais inválidas".
// Dicas:
// - O bloqueio deve ser testado antes das credenciais.
// - Use && no teste de login.
// - Aqui tentativas é um valor já definido; não será alterado
//   automaticamente, porque ainda não estudamos laços.
// Teste extra: tentativas = 3, mesmo com senha correta.

{
    let usuario = "admin";
    let senha = "1234";
    let tentativas = 2;

    if (tentativas >= 3) {
        console.log("Conta bloqueada");
    } else if (usuario === "admin" && senha === "1234") {
        console.log("Login permitido");
    } else {
        console.log("Credenciais inválidas");
    }
}

// 28. CONSUMO DE ENERGIA
// Código inicial:
// let consumoKWh = 250;
// Tarefa: calcular uma conta fictícia usando:
// até 100 kWh: R$ 0,60 por kWh;
// acima de 100 até 200: R$ 0,75 por kWh;
// acima de 200: R$ 0,90 por kWh.
// A tarifa escolhida incide sobre TODO o consumo.
// Dicas:
// - Primeiro rejeite consumo negativo.
// - Crie let tarifa = 0.
// - Defina a tarifa com if / else if / else.
// - Conta = consumoKWh * tarifa.
// - Não utilize cálculo por faixas progressivas neste exercício.
// Teste extra: consumoKWh = 100, 200 e 201.

{
    let consumoKWh = 250;

    if (consumoKWh < 0) {
        console.log("Consumo inválido");
    } else {
        let tarifa = 0;

        if (consumoKWh <= 100) {
            tarifa = 0.60;
        } else if (consumoKWh <= 200) {
            tarifa = 0.75;
        } else {
            tarifa = 0.90;
        }

        let conta = consumoKWh * tarifa;
        console.log(`Valor da conta: R$ ${conta.toFixed(2)}`);
    }
}

// 29. PROCESSAMENTO DE PEDIDO
// Código inicial:
// let estoque = 12;
// let quantidade = 3;
// let precoUnitario = 80;
// let saldoCliente = 220;
// let clienteVIP = false;
// Tarefa: autorize a compra somente se quantidade > 0,
// quantidade <= estoque e o cliente tiver saldo suficiente.
// Clientes VIP recebem desconto de 10% ANTES de comparar o saldo.
// Dicas:
// - Calcule subtotal = quantidade * precoUnitario.
// - Se clienteVIP, valorFinal = subtotal * 0.90; caso contrário,
//   valorFinal = subtotal.
// - Valide quantidade e estoque; então compare saldoCliente >= valorFinal.
// - Mostre o motivo da rejeição, se houver.
// Teste extra: clienteVIP = true (o desconto muda a aprovação?).

{
    let estoque = 12;
    let quantidade = 3;
    let precoUnitario = 80;
    let saldoCliente = 220;
    let clienteVIP = false;

    let subtotal = quantidade * precoUnitario;
    let valorFinal = subtotal;

    if (clienteVIP) {
        valorFinal = subtotal * 0.90;
    }

    if (quantidade <= 0) {
        console.log("Compra recusada: quantidade inválida");
    } else if (quantidade > estoque) {
        console.log("Compra recusada: estoque insuficiente");
    } else if (saldoCliente >= valorFinal) {
        estoque = estoque - quantidade;
        console.log("Compra autorizada");
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
        console.log(`Estoque restante: ${estoque}`);
    } else {
        console.log("Compra recusada: saldo insuficiente");
        console.log(`Valor necessário: R$ ${valorFinal.toFixed(2)}`);
    }
}

// 30. DESAFIO FINAL — INSCRIÇÃO EM COMPETIÇÃO
// Código inicial:
// let idade = 17;
// let notaProva = 82;
// let frequencia = 88;
// let autorizacaoResponsavel = true;
// let possuiPendencia = false;
// Tarefa: a inscrição só é aceita quando TODAS as regras são atendidas:
// - idade entre 14 e 20 anos (inclusive);
// - notaProva >= 70;
// - frequencia >= 80;
// - nenhuma pendência;
// - se for menor de 18 anos, precisa de autorização do responsável.
// Dicas:
// - Separe mentalmente as regras em pequenas condições.
// - Para a autorização: idade >= 18 || autorizacaoResponsavel.
// - Para ausência de pendência: !possuiPendencia.
// - Junte tudo usando &&.
// - Exiba "Inscrição aprovada" ou "Inscrição recusada".
// - Desafio extra: com else if, informe qual requisito falhou.
// Teste extra: idade = 16 e autorizacaoResponsavel = false;
// depois idade = 20 e autorizacaoResponsavel = false.

{
    let idade = 17;
    let notaProva = 82;
    let frequencia = 88;
    let autorizacaoResponsavel = true;
    let possuiPendencia = false;

    if (idade < 14 || idade > 20) {
        console.log("Inscrição recusada: idade fora da faixa permitida");
    } else if (notaProva < 70) {
        console.log("Inscrição recusada: nota insuficiente");
    } else if (frequencia < 80) {
        console.log("Inscrição recusada: frequência insuficiente");
    } else if (possuiPendencia) {
        console.log("Inscrição recusada: possui pendência");
    } else if (!(idade >= 18 || autorizacaoResponsavel)) {
        console.log("Inscrição recusada: falta autorização do responsável");
    } else {
        console.log("Inscrição aprovada");
    }
}
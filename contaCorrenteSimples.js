(function() {
    const cliente = {
        _nome: '',
        get nome() {
            return this._nome;
        },
        set nome(Nome = ' ') {
            this._nome = Nome.length < 4 ? 'Nome Inválido' : Nome;
        },
        _idade: 0,
        get idade() {
            return this._idade;
        },
        set idade(Idade = 0) {
            this._idade = Idade < 0 ? 'Idade Inválida' : Idade;
        },
        _salario: 0,
        get salario() {
            return this._salario;
        },
        set salario(Salario = 0) {
            this._salario = Salario < 0 ? 'Salário Inválido' : Salario;
        },
        _cpf: ' ',
        get cpf() {
            return this.cpf
        },
        set cpf(CPF = '') {
            this._cpf = CPF.length < 14 ? 'CPF Inválido' : CPF;
        },
        dados() {
            return `Cliente: ${this._nome} | Idade: ${this._idade} | Salário: ${this._salario} | CPF: ${this._cpf}`
        }
    }

    const conta = {
        _saldo: 0,
        get saldo() {
            return this._saldo;
        },
        set saldo(deposito = 0) {
            this._saldo = deposito;
        },
        _numeroConta: 0,
        get numeroConta() {
            return this._numeroConta;
        },
        set numeroConta(numeroConta = 0) {
            this._numeroConta = numeroConta;
        },
        sacarDinheiro(valorSaque = 0) {
            this._saldo = this._saldo - valorSaque;
            if (this._saldo > 0) {
                return `Saque realizado com sucesso, valor na conta ${this._saldo}`
            } else {
                return `Saque realizado com sucesso, valor na conta ${this._saldo} | Atenção: a conta está com saldo negativo.`
            }
        },
        status() {
            return `Saldo da conta (${this._numeroConta}): ${this._saldo} | ${super.dados()}`
        }
    }

    Object.setPrototypeOf(conta, cliente);
    conta.nome = 'Guilherme';
    conta.idade = 22;
    conta.cpf = '000.000.000-00';
    conta.saldo = 2500;
    conta.salario = 1100;
    conta.numeroConta = 209771;
    console.log(conta.status());
    conta.sacarDinheiro(1000);
    console.log(conta.status());


})();
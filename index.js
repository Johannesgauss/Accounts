import inquirer from 'inquirer'
import { createAccount} from './accountManager.js'
import { consultBalance, deposit, yankOut } from "./balance.js"

// Fiz desse jeito pois, assim, não haverá uma cadeia de chamadas de funções
// e, consequentemente, um uso muito grande de memória devido à
// grande quantidade de empilhamentos.

main()
async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'select',
                name: 'action',
                message: 'O que desejas fazer?',
                choices: [
                    'Criar conta',
                    'Consultar saldo',
                    'Depósito',
                    'Sacar',
                    'Sair'
                ],
            },
        ])

        // Executa a ação baseada na escolha
        switch (answers.action) {
            case 'Criar conta':
                await createAccount()
                break
            case 'Consultar saldo':
                await consultBalance()
                break
            case 'Depósito':
                await deposit()
                break
            case 'Sacar':
                await yankOut()
                break
            case 'Sair':
                process.exit(0)
        }

        main()

    } catch (err) {
        console.log(err)
    }
}

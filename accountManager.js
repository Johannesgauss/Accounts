import { input, select } from '@inquirer/prompts'
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

export async function createAccount(next) {
    console.log(chalk.green('Define the options of your account as follows:'))

    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'accountName',
                message: 'Enter a name for your account: ',
            },
        ]).then((answers) => {
            buildAccount(answers, next)
        }).catch((err) => {
            console.log(chalk.bgBlack.red("ERROR! " + err))
        })
}

function buildAccount(informations)
{
	const accountName = informations['accountName']

	//console.info(accountName)

	if (!fs.existsSync('Accounts')) {
		fs.mkdirSync('Accounts')
	}

	if (fs.existsSync(`Accounts/${accountName}.json`)) {
		console.log(`Account ${accountName} already exists.`)
		return;
	}


	const accountData= {
		name: accountName,
		balance: 0
	}

	try {
		fs.writeFileSync(
			`Accounts/${accountName}.json`,
			JSON.stringify(accountData, null, 2),
			'utf8'
		)
		console.log(chalk.green(`Sucess! Account ${accountName} created!`))
	} catch(err) {
		console.log(chalk.bgBlack.red("ERROR!: " + err))
	}

	return
}

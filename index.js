import { input, select } from '@inquirer/prompts'
import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

operation()
function operation()
{
	inquirer.prompt([
		{
			type: 'select',
			name: 'action',
			message: 'What do you wish to do?',
			choices: [
				'Create account',
				'Consult balance',
				'Deposit',
				'Yank out',
				'Exit'
			],
		},
	]).then((answers) => {
		if (answers['action'] == 'Create account')
			createAccount();
	}).catch((err) => {
		console.log("Cê é burro, cara! Que loucura!")
	})
}

function createAccount()
{
	console.log(chalk.green('Define the options of your account as follows:'))

	inquirer
		.prompt([
			{
				name: 'accountName',
				message: 'Digit a nome for your account: ',
			},
		]).then((answers) => buildAccount(answers))
		.catch((err) => {
			console.log(chalk.bgBlack.red("ERROR! " + err))
		})
}

async function buildAccount(informations)
{
	const accountName = informations['accountName']

	console.info(accountName)

	if (!fs.existsSync('Accounts')) {
		fs.mkdirSync('Accounts')
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

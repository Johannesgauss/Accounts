import { input, select } from '@inquirer/prompts'
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

async function obtainAccountNameFromUser()
{
	const answer = await inquirer
		.prompt([
			{
				type: 'Input',
				name: 'AccountName',
				message: 'Digit your account name: '
			}
		])
	const file_path = `Accounts/${answer.AccountName}.json`
	if (!fs.existsSync(file_path)) {
		console.log(chalk.bgBlack.red("ERRROR! Account does not exist! You must create an account first!"))
		return null
	}
	const account = JSON.parse(fs.readFileSync(file_path, 'utf8'))
	return account
}

export async function consultBalance()
{
    const account = await obtainAccountNameFromUser()
    if (!account) return // Added guard clause in case account doesn't exist

    const dollars = Math.floor(account.balance / 100)
    const cents = String(account.balance % 100).padStart(2, '0')

    console.log(`${chalk.green(`Saldo da conta ${account.name}: `)}${chalk.blue(dollars)}.${chalk.blue(cents)}`)
}
export async function deposit()
{

	const account = await obtainAccountNameFromUser()
	if (!account) return	

	const answer = await inquirer
		.prompt([
			{
				type: 'input',
				name: 'amount',
				message: 'How many money do you want to deposit?: R$'
			}
		])

	let moneyToCents = 1
	if (!answer.amount.includes('.') && !answer.amount.includes(','))
		moneyToCents = 100	
	let money_str = answer.amount.replace(/[.,]/g, "")
	let deposit = parseInt(money_str, 10)
	deposit *= moneyToCents	

	account.balance += deposit
	try {
		fs.writeFileSync(
			`Accounts/${account.name}.json`,
			JSON.stringify(account, null, 2),
			'utf8'
		)
		console.log(chalk.green(`Sucess! Deposit done!`))
	} catch(err) {
		console.log(chalk.bgBlack.red("ERROR!: " + err))
	}

}

export async function yankOut()
{

	const account = await obtainAccountNameFromUser()
	if (!account) return	

	const answer = await inquirer
		.prompt([
			{
				type: 'input',
				name: 'amount',
				message: 'How many money do you want to yank out?: R$'
			}
		])
	let moneyToCents = 1
	if (!answer.amount.includes('.') && !answer.amount.includes(','))
		moneyToCents = 100	
	let money_str = answer.amount.replace(/[.,]/g, "")
	let yankout = parseInt(money_str, 10)
	yankout *= moneyToCents	
	if (account.balance >= yankout) {
		account.balance -= yankout
	} else {
		console.log(chalk.bgBlack.red("You do not have enough money."))
		return
	}
	try {
		fs.writeFileSync(
			`Accounts/${account.name}.json`,
			JSON.stringify(account, null, 2),
			'utf8'
		)
		console.log(chalk.green(`Sucess! Yank out done!`))
	} catch(err) {
		console.log(chalk.bgBlack.red("ERROR!: " + err))
	}

}

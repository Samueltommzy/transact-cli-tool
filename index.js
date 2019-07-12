#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const { 
transact
} = require('./logic'); 


const questions = [
    {
        type: 'list',
        name: 'cardType',
        mesage: 'Select the card Type:',
        choices: ['Visa','Master']
    
    },
    {
        type: 'input',
        name: 'CardNumber',
        message: 'Enter last four digit of your card number e.g (1234):',
        validate: (val)=>{
            if(val.length ==4){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
    },
    {
        type: 'input',
        name: 'cardName',
        mesage: 'Enter the name on the card e.g (Richard Benson):',
        validate: (val)=>{
            if(val.length){
                return true
            }
            else{
                return "Please enter the name on your card"
            }
        }
    },
    {
        type: 'input',
        name: 'monthOfExpiry',
        message: 'Enter the month of Expiry e.g (09):',
        validate: (val)=>{
            if(val.length ==2){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
    },
    {
        type: 'input',
        name: 'yearOfExpiry',
        mesage: 'Enter the year of Expiry e.g (2019):',
        validate: (val)=>{
            if(val.length == 4){
                return true
            }
            else{
                return "Please enter a valid year"
            }
        }
    },
    {
        type: 'password',
        name: 'cvv',
        message: 'enter cvv at the back of the card e.g (123):',
        validate: (val)=>{
            if(val.length ==3){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
    } ,
    {
        type: 'password',
        name: 'pin',
        message: 'enter card four digit pin e.g (1234):',
        validate: (val)=>{
            if(val.length ==4){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
    },  

    {
        type: 'input',
        name: 'Amount to transfer in Naira',
        message: 'Please Enter Amount to transfer in Naira:',
         validate: (val)=>{
            if(val.length){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
        
    } ,
    {
        type: 'input',
        name: 'phone Number',
        message: 'enter your phone number:',
         validate: (val)=>{
            if(val.length ==11){
                return true
            }
            else{
                return "Please enter a valid value"
            }
        }
    } ,
    {
        type: 'confirm',
        name: 'OTP',
        message: 'A OTP will be seent to your phone number',
        validate: (val)=>{
            let done = this.async()
            if(val == 'Y'){
                setTimeout(()=>{
                    done(true)
                },2000)
            }
            else{
                done(false)
            }
        }
    } ,
    {
        type: 'input',
        name: 'OTP',
        message: 'Please enter the OTP sent to your phone number for verification  ',
        validate: ()=>{
    
            setTimeout(()=>{
                console.log('\n',"OTP verified")
            },3000)
            return true
        }
        
    } 

]

program
  .version('0.0.1')
  .description('CLI tool for payment')

program
  .command('transact')
  .alias('a')
  .description('Get the details and initiate transaction')
  .action(() => {
    prompt(questions).then((answers) =>{
      transact(answers)
      
      console.log('\n');
       setTimeout(()=>console.log(answers,7000))
       setTimeout(()=>console.log("card verification in progress...."),10000)
      setTimeout(()=>console.log('Thanks your Transcaction  with the details above was successful!'),15000)
      
  });
  })

program.parse(process.argv)
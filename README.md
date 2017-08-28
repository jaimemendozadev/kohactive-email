# [Simply Send It!](https://github.com/jaimemendozadev/kohactive-email)


Simply Send It (SSI) is an app that allows you to send an email to anyone in the  world!

You don't even need to signup for an email account. We'll send the message on your behalf using our custom domain!

All you have to do is enter your name in the <em>From</em> field and we'll handle the rest!

## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the App
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/kohactive-email`

If you want to run your own version of SSI, you'll need to actually buy two separate domains and hook it up to the app.

Simply Send It uses the [Mailgun](https://www.mailgun.com/) and [SparkPost](https://www.sparkpost.com/) API, which both need a domain you own to actually send emails.

And depending on which [Domain Name Registrar](https://en.wikipedia.org/wiki/Domain_name_registrar) you use to buy a domain, you might not be able to set up your domain name to use more than one email provider at a time (i.e. [GoDaddy](https://www.godaddy.com/help/add-an-mx-record-19234)).

So, you'll need two separate domains, one for Mailgun and the other for SparkPost. 

Once you have both domains, you'll have to: 

- verify a domain on each respective email service and 
- create an MX record on each domain that points to a specific email service.

You can view the API documentation on [Mailgun](http://mailgun-documentation.readthedocs.io/en/latest/quickstart-sending.html#verify-your-domain) and [SparkPost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#sending-domain-step-2-verifying-domain-ownership) for details on verifying the domain. 

Details for creating the MX records on a domain that points to an email provider depends on which service you used to buy the domain.

Once you're done with the initial setup, you'll need both domains and the API keys from Mailgun and SparkPost to create a `.env` file in the app root directory.

## Create a `.env` File

Fire up your terminal and in the root of the app directory, create a new `.env` file by simply running `$ touch .env`. 

After creating the `.env` file, use your text editor to create the following variables in the file:

- SPARKPOST_API_KEY
- MAILGUN_API_KEY
- MAILGUN_DOMAIN
- SPARKPOST_DOMAIN

There should be no spacing between the lines and do not end the line with punctuation or spacing. Please type the credentials exactly as they appear in the screenshot. 

  
![.env Screenshot](/img/env-screen-shot.png?raw=true ".env Screenshot ")  

After creating the `.env` and you fire up the app, you can use `process.env` in `const` declarations to access your API keys in the `mailers/mailgun.js` and `mailers/spark-post.js` files for making API calls.   


## Starting the App

In the root of the app, run `$ npm install` to install all the app dependencies. Wait until everything finishes loading.

Run the `$ npm start` command in your terminal to start the app.

Go to `http://localhost:3000` in your favorite browser to start using the app. 

## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)
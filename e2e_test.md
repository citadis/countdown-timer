* create e2e dir
* npm install --save-dev webdriverio
* npm install --save-dev wdio-cucumber-framework
* npm install --save-dev selenium-standalone
* npm install --save-dev chai
* cd e2e
* node ../node_modules/.bin/wdio

=========================
WDIO Configuration Helper
=========================

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? cucumber
? Shall I install the framework adapter for you? No
? Where are your feature files located? ./features/**/*.feature
? Where are your step definitions located? ./features/step-definitions
? Which reporter do you want to use?
? Do you want to add a service to your test setup?
? Level of logging verbosity error
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? http://localhost

Configuration file was created successfully!
To run your tests, execute:

$ wdio wdio.conf.js

* ../node_modules/.bin/selenium-standalone install
* ../node_modules/.bin/selenium-standalone start
* in package.json, add "e2e": "wdio e2e/wdio.conf.js"

NodeOnCFv2
==========

Node.js application that runs in a [Cloud Foundry](http://www.cloudfoundry.com) v2 environment. See [corresponding blog post for more information](http://seroter.wordpress.com/2013/06/19/deploying-a-cloud-foundry-v2-application-to-new-pivotal-cloud-environment/).

To push the application to a Cloud Foundry v2 environment, follow the steps below:

* Install the `cf` tool (see [installing cf](http://docs.cloudfoundry.com/docs/using/managing-apps/cf/index.html#installing))
* Update the generated `manifest.yml` file and add the node start command. In this application, that command is `node app.js`
* Use `cf` to push the application (`cf push`)
* Scale application as needed using `cf`

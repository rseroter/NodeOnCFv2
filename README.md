NodeOnCFv2
==========

Node.js application that runs in a Cloud Foundry v2 environment. See corresponding blog post at http://seroter.wordpress.com/2013/06/19/deploying-a-cloud-foundry-v2-application-to-new-pivotal-cloud-environment/.

To push the application to a Cloud Foundry v2 environment, follow the steps below:
* Download the CF tool (http://docs.cloudfoundry.com/docs/using/managing-apps/cf/index.html#installing)
* Update the generated YML file and add the Node start command. In this application, that command is "node app.js"
* Use CF to push the application (cf push)
* Scale appliation as needed using cf

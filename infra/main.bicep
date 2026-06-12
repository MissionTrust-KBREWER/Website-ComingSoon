targetScope = 'resourceGroup'

@description('Short environment name used in resource naming.')
@minLength(3)
@maxLength(12)
param environmentName string

@description('Azure region for all resources in this deployment.')
param location string = resourceGroup().location

var staticWebAppName = toLower('swa-${environmentName}-${uniqueString(resourceGroup().id)}')

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  tags: {
    'azd-service-name': 'web'
  }
  properties: {}
}

output AZURE_LOCATION string = location
output AZURE_STATIC_WEB_APP_NAME string = staticWebApp.name
output AZURE_STATIC_WEB_APP_DEFAULT_HOSTNAME string = staticWebApp.properties.defaultHostname

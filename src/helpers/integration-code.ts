/**
 * Generates a JavaScript fetch example for submitting feedback.
 */
export function getJavaScriptIntegrationCode(
  organizationId: string,
  projectId: string,
  hideComments = false,
) {
  if (hideComments) {
    return `fetch('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    description: 'I would really love to be able to copy this page as markdown.',
    type: 'FEATURE_REQUEST',
    email: 'janedoe@myspace.com',
    metadata: { page: 'Hosting · Docs' },
  }),
})`
  }
  return `fetch('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Required fields
    description: 'I would really love to be able to copy this page as markdown.',
    type: 'FEATURE_REQUEST', // Options: 'BUG' | 'FEATURE_REQUEST' | 'IMPROVEMENT' | 'QUESTION' | 'PRAISE' | 'OTHER'

    // Optional fields
    email: 'janedoe@myspace.com', // Contact email for follow-up
    metadata: { page: 'Hosting · Docs' }, // Any additional JSON data
  }),
})`
}

/**
 * Generates a curl example for submitting feedback.
 */
export function getCurlIntegrationCode(
  organizationId: string,
  projectId: string,
  hideComments = false,
) {
  if (hideComments) {
    return `curl -X POST '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "description": "I would really love to be able to copy this page as markdown.",
    "type": "FEATURE_REQUEST",
    "email": "janedoe@myspace.com",
    "metadata": { "page": "Hosting · Docs" }
  }'`
  }
  return `curl -X POST '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "description": "I would really love to be able to copy this page as markdown.",
    "type": "FEATURE_REQUEST",
    "email": "janedoe@myspace.com",
    "metadata": { "page": "Hosting · Docs" }
  }'

# Type options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER
# email and metadata are optional`
}

/**
 * Generates a Python requests example for submitting feedback.
 */
export function getPythonIntegrationCode(
  organizationId: string,
  projectId: string,
  hideComments = false,
) {
  if (hideComments) {
    return `import requests

response = requests.post(
    '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback',
    json={
        'description': 'I would really love to be able to copy this page as markdown.',
        'type': 'FEATURE_REQUEST',
        'email': 'janedoe@myspace.com',
        'metadata': {'page': 'Hosting · Docs'},
    }
)

print(response.json())`
  }
  return `import requests

response = requests.post(
    '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback',
    json={
        # Required fields
        'description': 'I would really love to be able to copy this page as markdown.',
        'type': 'FEATURE_REQUEST',  # Options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER

        # Optional fields
        'email': 'janedoe@myspace.com',  # Contact email for follow-up
        'metadata': {'page': 'Hosting · Docs'},  # Any additional JSON data
    }
)

print(response.json())`
}

/**
 * Generates a PHP example for submitting feedback.
 */
export function getPhpIntegrationCode(
  organizationId: string,
  projectId: string,
  hideComments = false,
) {
  if (hideComments) {
    return `<?php
$ch = curl_init('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode([
        'description' => 'I would really love to be able to copy this page as markdown.',
        'type' => 'FEATURE_REQUEST',
        'email' => 'janedoe@myspace.com',
        'metadata' => ['page' => 'Hosting · Docs'],
    ]),
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`
  }
  return `<?php
$ch = curl_init('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode([
        // Required fields
        'description' => 'I would really love to be able to copy this page as markdown.',
        'type' => 'FEATURE_REQUEST', // Options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER

        // Optional fields
        'email' => 'janedoe@myspace.com', // Contact email for follow-up
        'metadata' => ['page' => 'Hosting · Docs'], // Any additional JSON data
    ]),
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`
}

/**
 * Generates a Ruby example for submitting feedback.
 */
export function getRubyIntegrationCode(
  organizationId: string,
  projectId: string,
  hideComments = false,
) {
  if (hideComments) {
    return `require 'net/http'
require 'json'
require 'uri'

uri = URI('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = uri.scheme == 'https'

request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request.body = {
  description: 'I would really love to be able to copy this page as markdown.',
  type: 'FEATURE_REQUEST',
  email: 'janedoe@myspace.com',
  metadata: { page: 'Hosting · Docs' }
}.to_json

response = http.request(request)
puts response.body`
  }
  return `require 'net/http'
require 'json'
require 'uri'

uri = URI('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = uri.scheme == 'https'

request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request.body = {
  # Required fields
  description: 'I would really love to be able to copy this page as markdown.',
  type: 'FEATURE_REQUEST', # Options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER

  # Optional fields
  email: 'janedoe@myspace.com', # Contact email for follow-up
  metadata: { page: 'Hosting · Docs' } # Any additional JSON data
}.to_json

response = http.request(request)
puts response.body`
}

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

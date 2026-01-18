/**
 * Generates a JavaScript fetch example for submitting feedback.
 */
export function getJavaScriptIntegrationCode(
  organizationId: string,
  projectId: string,
) {
  return `fetch('${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Required fields
    description: 'Your feedback description here',
    type: 'BUG', // Options: 'BUG' | 'FEATURE_REQUEST' | 'IMPROVEMENT' | 'QUESTION' | 'PRAISE' | 'OTHER'

    // Optional fields
    email: 'user@example.com', // Contact email for follow-up
  }),
})`
}

/**
 * Generates a curl example for submitting feedback.
 */
export function getCurlIntegrationCode(
  organizationId: string,
  projectId: string,
) {
  return `curl -X POST '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "description": "Your feedback description here",
    "type": "BUG",
    "email": "user@example.com"
  }'

# Type options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER
# Email is optional`
}

/**
 * Generates a Python requests example for submitting feedback.
 */
export function getPythonIntegrationCode(
  organizationId: string,
  projectId: string,
) {
  return `import requests

response = requests.post(
    '${import.meta.env.VITE_APP_URL}/api/v1/${organizationId}/projects/${projectId}/feedback',
    json={
        # Required fields
        'description': 'Your feedback description here',
        'type': 'BUG',  # Options: BUG, FEATURE_REQUEST, IMPROVEMENT, QUESTION, PRAISE, OTHER

        # Optional fields
        'email': 'user@example.com',  # Contact email for follow-up
    }
)

print(response.json())`
}

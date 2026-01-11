import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { authMiddleware } from '@/middleware/auth'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware(false)],
  },
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div>
      <Button
        onClick={() => {
          authClient.signUp.email({
            email: 'user@email.com',
            password: 'password',
            name: 'First Last',
            fetchOptions: {
              onSuccess: () => {
                navigate({
                  to: '/',
                })
              },
            },
          })
        }}
      >
        Sign up
      </Button>
    </div>
  )
}

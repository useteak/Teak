import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { authMiddleware } from '@/middleware/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware(false)],
  },
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-svh">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>
            Log in to the app using your email and password or a social provider
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="jane@doe.com" type="email" />
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input placeholder="•••••••••••" type="password" />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              authClient.signIn.email({
                email: 'user@email.com',
                password: 'password',
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
            Log in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Progress } from '@nextui-org/react'

type Props = {
  component: React.ComponentType<object>
}

export const AuthenticationGuard = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <section className="flex justify-center pt-10">
        <div className="flex flex-col justify-center gap-2">
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
          />
          <h2>Redireccionando...</h2>
        </div>
      </section>
    ),
  })

  return <Component />
}

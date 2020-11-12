import { Container } from './styles'
import Link from 'next/link'
import { useAuth } from 'lib/useUser';

export default function Nav() {
    const auth = useAuth();
    return (
        <Container>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                {!auth.user ?
                    <>
                        <li><Link href="/signup"><a>Sign Up</a></Link></li>
                        <li><Link href="/login"><a>Login</a></Link></li>
                    </>
                    :
                    <>
                        <li><Link href="/dashboard"><a>Dashboard</a></Link></li>
                        <li><a onClick={() => auth.logout()}>Logout</a></li>
                    </>
                }
            </ul>
        </Container>
    )
}
import { Container, Nav, NavItem } from "reactstrap";
import Link from "next/link";
import { Header } from "./styled";

type Props = {
    children: React.ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header>
                <Nav className="navbar navbar-dark bg-dark">
                    <NavItem>
                        <Link href="/">
                            <a className="navbar-brand">Home</a>
                        </Link>
                    </NavItem>

                    <NavItem className="ml-auto">
                        <Link href="/login">
                            <a className="nav-link">Sign In</a>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link href="/register">
                            <a className="nav-link"> Sign Up</a>
                        </Link>
                    </NavItem>
                </Nav>
            </Header>
            <Container>{children}</Container>
        </div>
    );
};

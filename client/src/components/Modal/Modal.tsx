import { useState } from "react";
import axios from "axios";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

interface ModalProps {
    text: string;
    variant: string;
    isSignupFlow: boolean;
}

const ModalComponent = ({ text, variant, isSignupFlow }: ModalProps) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const handleClick = async () => {
        let data;
        if (isSignupFlow) {
            const response = await axios.post("http://localhost:8080/auth/signup", {
                email,
                password,
            });
            console.log(response)
        } else {
            const response = await axios.post("http://localhost:8080/auth/login", {
                email,
                password,
            });
        }
    };

    return (
        <>
            <Button
                onClick={handleShow}
                variant={variant}
                style={{ marginRight: "1rem", padding: "0.5rem 2rem" }}
                size="lg"
            >
                {text}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Password</InputGroup.Text>
                        <FormControl
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        {text}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalComponent;

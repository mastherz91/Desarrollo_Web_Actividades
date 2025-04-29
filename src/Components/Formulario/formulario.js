import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function GoalForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="goalName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter goal name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="goalDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="goalDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
                ADD GOAL
            </Button>
        </Form>
    );
}

export default GoalForm;

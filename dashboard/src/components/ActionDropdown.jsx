
import Dropdown from 'react-bootstrap/Dropdown';

export const ActionDropdown = (props) => {

    const onClickView = () => {
        props.onView && props.onView(props.id)
    }

    const onClickEdit = () => {
        props.onClickEdit && props.onClickEdit(props.id)
    }

    const onClickDelete = () => {
        props.onClickDelete && props.onClickDelete(props.id)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Acciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {/* <Dropdown.Item onClick={onClickView}>Ver</Dropdown.Item> */}
                <Dropdown.Item onClick={onClickEdit}>Editar</Dropdown.Item>
                <Dropdown.Item onClick={onClickDelete}>Eliminar</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
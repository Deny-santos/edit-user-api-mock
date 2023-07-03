import { styled } from 'styled-components'

type Props = {
    name?: String;
    city?: String;
    onclose?: () => void;
    id?: String;
}

const MyModal = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
`
const Fede = styled.div`
    height: 100vh;
    width: 100vw;
    background-color:  #0000008f;
    position: fixed;
    top: 0;
    left: 0;
`

const Center = styled.div`
    height: 50vh;
    width: 70vw;
    background-color:  #ffffff;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;

`


const Modal = ({ city, name, onclose }: Props) => {
    return (
        <MyModal>
            <Fede onClick={onclose}>
            </Fede>
            <Center>
                <button onClick={onclose} > fechar</button>
                <p>name: {name}</p>
                <p>city: {city}</p>
            </Center>
        </MyModal>
    )
}

export default Modal
import { styled } from 'styled-components'

type Props = {
    name?: String;
    city?: String;
    avatar?: String;
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
    border-radius: 10px;
    padding: 10px 20px;
`

const TopModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Btn = styled.div`
    background-color: #e72727;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    height: max-content;
`

const ImgContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;
    border: 2px solid blue;
`

const Img = styled.img`
    max-width: 100%;
`

const Hr = styled.hr`
    margin: 20px 0px;
`
const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const P = styled.p`
    font-size: 22px;


    span {
        font-weight: 700;
    }
`


const Modal = ({ city, name, avatar, onclose }: Props) => {
    return (
        <MyModal>
            <Fede onClick={onclose}>
            </Fede>
            <Center>
                <TopModal>
                    <Btn onClick={onclose} > fechar</Btn>
                    <ImgContainer>
                        <Img src={avatar}></Img>
                    </ImgContainer>
                </TopModal>
                <Hr />
                <UserDetails>
                    <P><span>Name</span>: {name}</P>
                    <P><span>City</span>: {city}</P>
                </UserDetails>
            </Center>
        </MyModal>
    )
}

export default Modal
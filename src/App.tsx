import { useState } from "react"
import './App.css'
import useList, { userDetails } from "./hooks/useList"
import Modal from "./components/Modal"
import { styled } from "styled-components"
import { BsTrash3, BsPencil } from "react-icons/bs"

const Main = styled.div`
  background-color: #475569;
  display: flex;
  min-height: 100vh;
  padding: 30px 10px;
  `

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`

const Card = styled.div`
  background-color: #94A3B8;
  min-width: 350px;
  min-height: 100px;
  padding: 20px;
  border-radius: 7px;

  display: flex;
  gap: 10px;
  align-items: center;
`

const Img = styled.img`
  max-width: 100%;
`

const ImgContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  flex: 1;
`

const BtnSee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1167c9;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  svg {
    color: white;
  }
`

function App() {

  const { userList } = useList()

  const [selectedCard, setSelectedCard] = useState<userDetails | null>(null)

  const handleCardClick = (name: string, city: string, id: any) => {
    setSelectedCard({ name, city, id });
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };
  return (
    <Main>
      <Container>
        {userList.map((user: userDetails, i: number) => (
          <Card key={i}>
            <ImgContainer>
              <Img src={user.avatar} alt="" />
            </ImgContainer>

            <div>
              <div key={i}>{user.name}</div>
              <div key={i}>{user.city}</div>
            </div>

            <BtnContainer>
              <BtnSee onClick={() => handleCardClick(user.name, user.city, user.id)} >
                <BsPencil/>
              </BtnSee>
              <BtnSee onClick={() => handleCardClick(user.name, user.city, user.id)} >
                <BsTrash3/>
              </BtnSee>
            </BtnContainer>

            {selectedCard?.id === user.id ? (
              <Modal city={selectedCard!.city} name={selectedCard!.name} avatar={user.avatar} onclose={handleModalClose} />
            ) : ""}
          </Card>
        ))}
      </Container>
    </Main>
  )
}

export default App

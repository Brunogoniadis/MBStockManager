import { Container, Circle1 , Circle2 } from "./styles"
import GiPlainCircle from "react"
import { IPageNumberProps } from "./types"



export const PageNumber = ({pageNumber}: IPageNumberProps) => {

    return(
        <>
            <Container >
                    <Circle1 />
                    <Circle2/>
            </Container>
        </>
    )

}
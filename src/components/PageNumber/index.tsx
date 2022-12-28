import { Container, Circle1, Circle2} from "./styles"
import { IPageNumberProps } from "./styles"


export const PageNumber = ({pageNumber}: IPageNumberProps) => {

    return(
        <>
            <Container >
                    <Circle1 key={0} pageNumber={pageNumber}/>
                    <Circle2 key={0} pageNumber={pageNumber}/>
            </Container>
        </>
    )

}
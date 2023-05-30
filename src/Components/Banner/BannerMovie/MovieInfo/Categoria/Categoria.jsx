import styled from "@emotion/styled";

const Categoria = (props) => {
    const {color, tipo} = props;

    const Categoria = styled.div`
        background-color: ${color};
        width: auto;
        height: auto;
        padding: 10px;
        border-radius: 10px;
        color: var(--Blanco-Grisado);
        font-weight: 400;
        font-size: 3.125rem;
        text-align: center;
        text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        

            /*Tablets*/
        @media screen and (max-width: 768px) {
            & {
                font-size: 1.25rem;
                width: 7rem;
                padding: .3125rem;
                position: absolute;
                left: 0;
                bottom: 2rem;
            }
        }

            /*Movil*/
        @media screen and (max-width: 482px) {
            & {
                font-size: .8125rem;
                width: 5rem;
                padding: .3125rem;
                position: absolute;
                left: 0;
                bottom: 2rem;
            }
        }
    `;

    return <Categoria>
            <span>
                {tipo}
            </span>
    </Categoria>
}

export default Categoria;
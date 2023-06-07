import styled from "@emotion/styled";

const Categoria = (props) => {
    const {color, tipo} = props;

    const Categoria = styled.div`
        background-color: ${color};
        width: auto;
        height: auto;
        padding: .625rem;
        border-radius: 10px;
        color: var(--Blanco-Grisado);
        font-weight: 400;
        font-size: 2.1875rem;
        text-align: center;
        text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        
        
        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px){
            & {
                font-size: 1.25rem;
                padding: .3125rem;
            }
        }


            /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px) {
            & {
                font-size: .9375rem;
                padding: .3125rem;
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
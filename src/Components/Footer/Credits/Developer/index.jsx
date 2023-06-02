import styled from "@emotion/styled";

const Developer = () => {

    const Developer = styled.div`
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-weight: 400;
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        & h3 {
            text-shadow: 1px 1px 1px var(--Color-Primario);
        }

        & span {
            text-shadow: 1px 1px 10px var(--Color-Primario);
        }

    `;

    return <Developer>
        <h3>Developer:</h3>
        <span>Lorenzo Chavez</span>
    </Developer>
}

export default Developer;
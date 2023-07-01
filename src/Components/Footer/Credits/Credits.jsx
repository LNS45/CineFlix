import styled from "@emotion/styled";
import Developer from "./Developer";
import Social from "./Social";

const Credits = () => {

    const Credits = styled.div`
        width: 300px;
        height: auto;
        display: flex;
        box-sizing: border-box;
        padding: 10px;
        flex-direction: column;
    `;

    return <Credits>
        <Developer />
        <Social />
    </Credits>

};

export default Credits;
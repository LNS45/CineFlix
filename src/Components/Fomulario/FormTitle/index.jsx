import styled from "@emotion/styled";

const FormTitle = (props) => {
    const {text} = props;

    const FormTitle = styled.h2`
    font-size: 40px;
    font-weight: 400;
    color: #F5f5f5;
    text-shadow: 5px 3px 1px rgba(0,0,0,0.9);
    text-align: center;
    `;
    return <FormTitle>
        {text}
    </FormTitle>
};

export default FormTitle;
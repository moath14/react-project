import styled from 'styled-components'

/*
    =====================================
                Contact Section Style
    =====================================
*/

export const FormSection = styled.div`
    padding: 70px 0
`;

export const FormCenter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    text-transform: capitalize;
    margin-bottom: 30px;
    font-size: 35px;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
`;

export const Input = styled.input`
    padding: 7px 0;
    text-indent: 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #DDD;
    text-transform: capitalize;
    width: ${props => (props.className === "name" || props.className === "email") ? "49%" : ""};
    margin: ${props => props.className === "subject" ? "10px 0" : ""};
    width: ${props => props.className === "subject" ? "100%" : ""}
`;



export const InfoForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;



export const Textarea = styled.textarea`
    text-indent: 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #DDD;
    text-transform: capitalize;  
    padding-top: 10px;
    background: #ddd;
    resize: none;
    width: 100%
`;

export const Button = styled.button`
    outline: none;
    border-radius: 4px;
    border: 1px solid #DDD;
    text-transform: capitalize;
    width: 40%;
    margin-top: 10px;
    padding: 10px 0;
    cursor: pointer;
    color: #000;
    font-weight: bold;    
`;







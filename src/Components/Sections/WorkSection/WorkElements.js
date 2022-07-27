import styled from "styled-components";


export const InfoContainer2 = styled.div`
color: #ffff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#0a0b14')};

@media screen and (max-width:768px){
padding: 100px 0;
}
`;

export const InfoWrapper2 = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

`;

export const InfoRow2 = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas : ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column12 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column22 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper2 = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine2 = styled.p`
color: #0163bf;
font-size:16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;

export const Heading2 = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-hight: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#101522')};

@media screen and (max-width:480px){
    font-size: 32px;
    }
`;

export const Subtitle2 = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#101522' : '#fff')};
`;

export const BtnWrap2 = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap2 = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img2 = styled.img`
width: 100%;
border-radius: 30px;
box-shadow: 0px 5px 20px black;
margin: 0 0 10px 0;
padding-right: 0;
`;

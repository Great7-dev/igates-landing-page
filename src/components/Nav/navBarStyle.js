import styled from "styled-components";

export const Navstyle = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    position: fixed;
     background-color: #ffffff;
    z-index: 50;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    

.name{
display: flex;
font-family: 'Yellix';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #F26419;
margin-left: 102px;
}
.gates{
    color: #000000;
}
.nav-links{
    display: flex;
    text-align:center;
    align-items: center;
    text-decoration:none;
    margin-left: 620px;
    gap:30px;
}
li:hover{
    color: #F26419
}
ul {
    cursor: pointer;
    font-family: 'Yellix';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    list-style-type: none;
    margin-bottom: 0;
    padding: 0;
  }
  .btn{
    cursor: pointer;
    display: flex;
    background-color: #F26419;
    color: #FFFFFF;
    padding: 20px 40px;
    width: 183px;
    height: 64px;  
    margin: 25px 0 0 30px;
    border-radius: 8px;
    font-family: 'Yellix';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    border-style: none;
  }
 `;
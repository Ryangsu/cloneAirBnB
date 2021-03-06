import React from "react";
import styled from "styled-components";
import {Text} from "../elements"
import {actionCreators as userActions} from "../redux/modules/user"
import { useDispatch } from "react-redux";

const LoginModal = ({setIsM}) => {
    const dispatch = useDispatch()
    const [id,setId] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    const login =()=>{
        dispatch(userActions.logInDB(id,pwd))
    }
return(
     <React.Fragment>
         <Black onClick={()=>setIsM(false)}/>
         <Wrap>
            <Header>
                <div onClick={()=>setIsM(false)}>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill:" none", height: "16px", width: "16px", stroke: "#222222", strokeWidth: "3", overflow: "visible",cursor:"pointer"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div>로그인</div>
                <div></div>
            </Header>
            <Text size="22px" bold>에어비엔비에 오신걸 환영합니다</Text>
            <Input placeholder={"id"} padding="0px 30px" onChange={(e)=>{setId(e.target.value)}}></Input>
            <input type={"password"} onChange={(e)=>{setPwd(e.target.value)}} style={{
                padding: "16px",
                marginBottom: "10px",
                border:"1px solid gray",
                borderRadius: "7px",
                cursor: "pointer",
                }}
                placeholder={"password"}/>
            <Text color="gray">작성하신 메일 주소를 통해 메일을 확인하겠습니다.<strong style={{textDecoration:"underline"}}>개인정보 처리방침</strong> </Text>
            <Button onClick={()=>{login(); setIsM(false)}}>로그인</Button>
        </Wrap>
    </React.Fragment>
  )
};

const Input =styled.input`
padding: 16px;
margin-bottom: 10px;
border:1px solid gray;
border-radius: 7px;
cursor:auto;
:focus{
    border:none;
    outline: 1px solid rgb(255, 56, 92);
} 
`

const Button =styled.button`
border-radius: 6px;
border: none;
background-color:rgb(255, 56, 92) ;
padding: 16px;
color: white;
margin: 10px 0px 0px 0px;
`

const Wrap = styled.div`
    background: rgb(255, 255, 255);
    width: 600px;
    height: 50%;
    max-width: 100vw ;
    display: flex ;
    flex-direction: column ;
    box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px ;
    border-radius: 12px ;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1011;
`

const Black= styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.50);
`

const Header= styled.div`
    -webkit-box-pack: justify;
    -webkit-box-align: center ;
    display: flex ;
    flex: 0 0 auto ;
    align-items: center ;
    justify-content: space-between ;
    padding: 0px 24px ;
    min-height: 48px ;
    border-bottom: 1px solid rgb(235, 235, 235);
    color: rgb(34, 34, 34) ;
    font-size: 16px ;
    line-height: 20px ;
    font-weight: 800;
`

export default LoginModal;
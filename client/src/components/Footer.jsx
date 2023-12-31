import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import payment from '../../src/images/payment.png'
import { mobile } from '../responsive'
const Container=styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`
const Left=styled.div`
padding:20px;
   flex:1; 
`
const Center=styled.div`
    flex:1;
    padding:20px;
    
    ${mobile({display:'none'})}
    
`
const Right=styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor :"#eee"})}
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
margin:20px 0;
`
const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
   width:40px;
   height:40px;
   border-radius :50% ;
   color:white;
   background-color:#${props=>props.color};
   display:flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`
const Title=styled.h3`
  margin-bottom: 30px;
`
const List=styled.ul`
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`
const ListItem=styled.li`
  width:50%;
  margin-bottom:10px;
`
const ContactItem=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const PaymentMethod=styled.img`
  width:50%;
`
    

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo recusandae saepe harum, sequi maxime illo, reprehenderit quisquam ipsam sunt natus, itaque aut magni qui perferendis enim provident et nostrum atque voluptate vel delectus. Pariatur voluptas ipsam asperiores, impedit beatae minus dolorum corporis cupiditate totam debitis architecto magni dolores tempora!</Desc>
        <SocialContainer>
            <SocialIcon color="385999">
                <Facebook  c/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
         <Room style={{marginRight:"10px"}}/> Shabia 10,MBZ,
          Abudhabi
        </ContactItem>
         <ContactItem>
         <Phone style={{marginRight:"10px"}} /> 
          0565696761
        </ContactItem>
         <ContactItem>
         <EmailOutlined style={{marginRight:"10px"}}/> 
          contact@lama.dev
        </ContactItem>
         <ContactItem>
        <PaymentMethod src={payment}>

        </PaymentMethod>
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer


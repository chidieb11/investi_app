import React from "react";
import styled from "styled-components";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
`;

const FirstWrapper = styled.div`
  background-color: #03103b;
  color: #fff;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled.span`
  font-weight: 600;
`;

const HeaderItems = styled.div``;

const Second = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Circle = styled.span``;

const Image = styled.img`
  font-size: 10px;
  height: 8%;
  width: 8%;
  border-radius: 50%;
`;

const SecondWrapper = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  position: relative;
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  top: 130px;
  right: 495px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  color: #000;
  background: whitesmoke;
  border-radius: 5px;
`;

const AvailableCashDetails = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 5px;
  opacity: 0.6;
`;

const Amount = styled.h3`
  font-weight: 800;
  margin-top: 10px;
`;

const PaymentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03103b;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 15px;
  margin-left: 10px;
`;

const ThirdWrapper = styled.div`
  padding: 30px;
`;

const CardItems = styled.div``;

const CardItemTitle = styled.h2`
  margin-top: 45px;
  font-weight: 600;
  font-size: 20px;
`;

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #051553;
  color: #fff;
  margin-top: 10px;
  border-radius: 5px;
`;
const CardImage = styled.img`
  font-size: 10px;
  height: 20%;
  width: 20%;
  border-radius: 50%;
`;
const CardDetails = styled.div``;

const CardTitle = styled.h2``;

const CardDesc = styled.p``;

const CardBtn = styled.button`
  background: #2d3a6f;
  color: #fff;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
`;

const Item = styled.span``;

const Footer = styled.footer`
  padding: 30px;
`;

const FooterCard = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 50px;
  opacity: 0.6;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 40px;
  cursor: pointer;
  position: absolute;
  width: 429.92px;
  height: 110.11px;
  left: 450px;
  top: 810.89px;
`;

const Portfolio = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
`;

const Home = () => {
  return (
    <Container>
      {/* FirstWrapper */}
      <FirstWrapper>
        <Header>
          <Time>19:41</Time>
          <HeaderItems>
            <NetworkCellIcon />
            <WifiIcon />
            <BatteryCharging50OutlinedIcon />
          </HeaderItems>
        </Header>
        <Second>
          <Circle>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAY1BMVEUAAAD///+lpaXd3d12dnZiYmJ5eXm4uLhZWVnb29sQEBDr6+ufn5/BwcGgoKAlJSXz8/PU1NQiIiIqKirj4+OQkJDm5uZNTU1paWnDw8NSUlJYWFjw8PCHh4f5+fkdHR0VFRWOi36eAAACCklEQVR4nO3dWU4CURCGUQRHBBRt2wEc9r9KN0D9CTdArnjqtfMFDo9dqTBZzqoZppN6boayW4fss87Ghzp7Hetv+RY+bjJclPMesnWdfYVsUWcXz3V2G7LrpJvV3bJN90hHR0dHR0dHR0dHR0dHR0dHR0dHR7e3rp930d919hGyy6R7mZazqB9NVwfPYteWvST4ZfjFrkIXsrR42dbZLGQ3dTZ0pLs/uC5ldHR0dHR0dHR0dHR0dHR0dHR0dHR03es2h9c91ll6ZR5042SsH6Yd0F0ghCztgEL2GrK4A/rz+zs6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OrrudY3XFuFNe+u1xU+dubbYMc3XFrehC9nfv7aYN+o62t/R0dHR0dHR0dHR0dHR0dHR0dHR0dH1oDvva4uwGHNtsWvCP3ecwXaSjo6Ojo6Ojo6Ojo6Ojo6Ojo6Oju4/68K1RdKd97VF2/mDa4tdc4xri+vwNU+7v7tr08X9HR0dHR0dHR0dHR0dHR0dHR0dHR0dXQ+6E19bfNXZMa4t0g4oLMbSDmgV5CHr6Npi26h7qrOOtpN0dHR0dHR0dHR0dHR0dHR0dHR0dHT76057bZF08zrbtOpOe21xhM61xa457/0dHR0dHR0dHR0dHR0dHR0dHR0dHR3dvrpj/LfF2zirZgzXFvM6G9Kb/fVQZmlfswrZL/B8qB1Yu4KsAAAAAElFTkSuQmCC" />
          </Circle>
          <NotificationsIcon />
        </Second>
      </FirstWrapper>
      {/* SecondWrapper */}
      <SecondWrapper>
        <Card>
          <AvailableCashDetails>
            <Title>
              Available Cash <VisibilityIcon />
            </Title>
            <Amount>$10,000</Amount>
          </AvailableCashDetails>
          <PaymentBtn>
            <AddIcon />
            Payment
          </PaymentBtn>
        </Card>
      </SecondWrapper>
      {/* ThirdWrapper */}
      <ThirdWrapper>
        <CardItems>
          <CardItemTitle>Top Stocks</CardItemTitle>
          <CardItem>
            <CardImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAY1BMVEUAAAD///+lpaXd3d12dnZiYmJ5eXm4uLhZWVnb29sQEBDr6+ufn5/BwcGgoKAlJSXz8/PU1NQiIiIqKirj4+OQkJDm5uZNTU1paWnDw8NSUlJYWFjw8PCHh4f5+fkdHR0VFRWOi36eAAACCklEQVR4nO3dWU4CURCGUQRHBBRt2wEc9r9KN0D9CTdArnjqtfMFDo9dqTBZzqoZppN6boayW4fss87Ghzp7Hetv+RY+bjJclPMesnWdfYVsUWcXz3V2G7LrpJvV3bJN90hHR0dHR0dHR0dHR0dHR0dHR0dHR7e3rp930d919hGyy6R7mZazqB9NVwfPYteWvST4ZfjFrkIXsrR42dbZLGQ3dTZ0pLs/uC5ldHR0dHR0dHR0dHR0dHR0dHR0dHR03es2h9c91ll6ZR5042SsH6Yd0F0ghCztgEL2GrK4A/rz+zs6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OrrudY3XFuFNe+u1xU+dubbYMc3XFrehC9nfv7aYN+o62t/R0dHR0dHR0dHR0dHR0dHR0dHR0dH1oDvva4uwGHNtsWvCP3ecwXaSjo6Ojo6Ojo6Ojo6Ojo6Ojo6Oju4/68K1RdKd97VF2/mDa4tdc4xri+vwNU+7v7tr08X9HR0dHR0dHR0dHR0dHR0dHR0dHR0dXQ+6E19bfNXZMa4t0g4oLMbSDmgV5CHr6Npi26h7qrOOtpN0dHR0dHR0dHR0dHR0dHR0dHR0dHT76057bZF08zrbtOpOe21xhM61xa457/0dHR0dHR0dHR0dHR0dHR0dHR0dHR3dvrpj/LfF2zirZgzXFvM6G9Kb/fVQZmlfswrZL/B8qB1Yu4KsAAAAAElFTkSuQmCC" />
            <CardDetails>
              <CardTitle>Google</CardTitle>
              <CardDesc>Invest in stocks</CardDesc>
            </CardDetails>
            <CardBtn>
              <Item>Invest</Item>
            </CardBtn>
          </CardItem>
          <CardItem>
            <CardImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAY1BMVEUAAAD///+lpaXd3d12dnZiYmJ5eXm4uLhZWVnb29sQEBDr6+ufn5/BwcGgoKAlJSXz8/PU1NQiIiIqKirj4+OQkJDm5uZNTU1paWnDw8NSUlJYWFjw8PCHh4f5+fkdHR0VFRWOi36eAAACCklEQVR4nO3dWU4CURCGUQRHBBRt2wEc9r9KN0D9CTdArnjqtfMFDo9dqTBZzqoZppN6boayW4fss87Ghzp7Hetv+RY+bjJclPMesnWdfYVsUWcXz3V2G7LrpJvV3bJN90hHR0dHR0dHR0dHR0dHR0dHR0dHR7e3rp930d919hGyy6R7mZazqB9NVwfPYteWvST4ZfjFrkIXsrR42dbZLGQ3dTZ0pLs/uC5ldHR0dHR0dHR0dHR0dHR0dHR0dHR03es2h9c91ll6ZR5042SsH6Yd0F0ghCztgEL2GrK4A/rz+zs6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OrrudY3XFuFNe+u1xU+dubbYMc3XFrehC9nfv7aYN+o62t/R0dHR0dHR0dHR0dHR0dHR0dHR0dH1oDvva4uwGHNtsWvCP3ecwXaSjo6Ojo6Ojo6Ojo6Ojo6Ojo6Oju4/68K1RdKd97VF2/mDa4tdc4xri+vwNU+7v7tr08X9HR0dHR0dHR0dHR0dHR0dHR0dHR0dXQ+6E19bfNXZMa4t0g4oLMbSDmgV5CHr6Npi26h7qrOOtpN0dHR0dHR0dHR0dHR0dHR0dHR0dHT76057bZF08zrbtOpOe21xhM61xa457/0dHR0dHR0dHR0dHR0dHR0dHR0dHR3dvrpj/LfF2zirZgzXFvM6G9Kb/fVQZmlfswrZL/B8qB1Yu4KsAAAAAElFTkSuQmCC" />
            <CardDetails>
              <CardTitle>Apple</CardTitle>
              <CardDesc>Invest in stocks</CardDesc>
            </CardDetails>
            <CardBtn>
              <Item>Invest</Item>
            </CardBtn>
          </CardItem>
          <CardItem>
            <CardImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAY1BMVEUAAAD///+lpaXd3d12dnZiYmJ5eXm4uLhZWVnb29sQEBDr6+ufn5/BwcGgoKAlJSXz8/PU1NQiIiIqKirj4+OQkJDm5uZNTU1paWnDw8NSUlJYWFjw8PCHh4f5+fkdHR0VFRWOi36eAAACCklEQVR4nO3dWU4CURCGUQRHBBRt2wEc9r9KN0D9CTdArnjqtfMFDo9dqTBZzqoZppN6boayW4fss87Ghzp7Hetv+RY+bjJclPMesnWdfYVsUWcXz3V2G7LrpJvV3bJN90hHR0dHR0dHR0dHR0dHR0dHR0dHR7e3rp930d919hGyy6R7mZazqB9NVwfPYteWvST4ZfjFrkIXsrR42dbZLGQ3dTZ0pLs/uC5ldHR0dHR0dHR0dHR0dHR0dHR0dHR03es2h9c91ll6ZR5042SsH6Yd0F0ghCztgEL2GrK4A/rz+zs6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OrrudY3XFuFNe+u1xU+dubbYMc3XFrehC9nfv7aYN+o62t/R0dHR0dHR0dHR0dHR0dHR0dHR0dH1oDvva4uwGHNtsWvCP3ecwXaSjo6Ojo6Ojo6Ojo6Ojo6Ojo6Oju4/68K1RdKd97VF2/mDa4tdc4xri+vwNU+7v7tr08X9HR0dHR0dHR0dHR0dHR0dHR0dHR0dXQ+6E19bfNXZMa4t0g4oLMbSDmgV5CHr6Npi26h7qrOOtpN0dHR0dHR0dHR0dHR0dHR0dHR0dHT76057bZF08zrbtOpOe21xhM61xa457/0dHR0dHR0dHR0dHR0dHR0dHR0dHR3dvrpj/LfF2zirZgzXFvM6G9Kb/fVQZmlfswrZL/B8qB1Yu4KsAAAAAElFTkSuQmCC" />
            <CardDetails>
              <CardTitle>Meta</CardTitle>
              <CardDesc>Invest in stocks</CardDesc>
            </CardDetails>
            <CardBtn>
              <Item>Invest</Item>
            </CardBtn>
          </CardItem>
          <CardItem>
            <CardImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAY1BMVEUAAAD///+lpaXd3d12dnZiYmJ5eXm4uLhZWVnb29sQEBDr6+ufn5/BwcGgoKAlJSXz8/PU1NQiIiIqKirj4+OQkJDm5uZNTU1paWnDw8NSUlJYWFjw8PCHh4f5+fkdHR0VFRWOi36eAAACCklEQVR4nO3dWU4CURCGUQRHBBRt2wEc9r9KN0D9CTdArnjqtfMFDo9dqTBZzqoZppN6boayW4fss87Ghzp7Hetv+RY+bjJclPMesnWdfYVsUWcXz3V2G7LrpJvV3bJN90hHR0dHR0dHR0dHR0dHR0dHR0dHR7e3rp930d919hGyy6R7mZazqB9NVwfPYteWvST4ZfjFrkIXsrR42dbZLGQ3dTZ0pLs/uC5ldHR0dHR0dHR0dHR0dHR0dHR0dHR03es2h9c91ll6ZR5042SsH6Yd0F0ghCztgEL2GrK4A/rz+zs6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OrrudY3XFuFNe+u1xU+dubbYMc3XFrehC9nfv7aYN+o62t/R0dHR0dHR0dHR0dHR0dHR0dHR0dH1oDvva4uwGHNtsWvCP3ecwXaSjo6Ojo6Ojo6Ojo6Ojo6Ojo6Oju4/68K1RdKd97VF2/mDa4tdc4xri+vwNU+7v7tr08X9HR0dHR0dHR0dHR0dHR0dHR0dHR0dXQ+6E19bfNXZMa4t0g4oLMbSDmgV5CHr6Npi26h7qrOOtpN0dHR0dHR0dHR0dHR0dHR0dHR0dHT76057bZF08zrbtOpOe21xhM61xa457/0dHR0dHR0dHR0dHR0dHR0dHR0dHR3dvrpj/LfF2zirZgzXFvM6G9Kb/fVQZmlfswrZL/B8qB1Yu4KsAAAAAElFTkSuQmCC" />
            <CardDetails>
              <CardTitle>Stripe</CardTitle>
              <CardDesc>Invest in stocks</CardDesc>
            </CardDetails>
            <CardBtn>
              <Item>Invest</Item>
            </CardBtn>
          </CardItem>
        </CardItems>
      </ThirdWrapper>
      {/* Footer */}
      <Footer>
        <FooterCard>
          <Portfolio>
            <AccountBalanceWalletIcon />
            Portfolio
          </Portfolio>
          <Portfolio>
            <HomeIcon />
          </Portfolio>
          <Portfolio>
            <YoutubeSearchedForIcon />
            Search
          </Portfolio>
        </FooterCard>
      </Footer>
    </Container>
  );
};

export default Home;

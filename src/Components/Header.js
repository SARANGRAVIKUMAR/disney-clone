import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

   useEffect(() => {
     auth.onAuthStateChanged(async (user) => {
       if (user) {
         setUser(user);
         history.push("/home");
       }
     });
   }, [userName]);

   const handleAuth = () => {
     if (!userName) {
       auth
         .signInWithPopup(provider)
         .then((result) => {
           setUser(result.user);
         })
         .catch((error) => {
           alert(error.message);
         });
     } else if (userName) {
       auth
         .signOut()
         .then(() => {
           dispatch(setSignOutState());
           history.push("/");
         })
         .catch((err) => alert(err.message));
     }
   };

   const setUser = (user) => {
     dispatch(
       setUserLoginDetails({
         name: user.displayName,
         email: user.email,
         photo: user.photoURL,
       })
     );
   };


  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserLoginDetails({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOutState());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg
            onClick={signOut}
            src="https://yt3.ggpht.com/yti/ANoDKi4rQgwf52nxX5QQRJATf6f1FHY7oGg141KrPOtR5Q=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </>
      )}
    </Nav>
  );
};

export default Header;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    align-items: center;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      /* to create a line under each headeing */
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        /* so that the line will onlybe visible at hover time */
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

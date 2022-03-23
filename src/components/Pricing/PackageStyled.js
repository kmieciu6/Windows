import styled, {css} from "styled-components";
import React from "react";
import styles from "./package.module.scss";
import Button from "../Button";

const PackageStyled = styled.div`
  width: 372px;
  height: 461px;
  border-radius: 18px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: row;
    justify-content: center;
    height: 250px;
    width: auto;
  }

  h3 {
    font-family: 'Raleway', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    padding-top: 34px;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.875rem;
    font-weight: 300;
    color: #FB3B64;
    line-height: 4rem;
    padding: 14px 0 69px 0;
  }

  h5 {
    font-family: 'Raleway', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    padding-bottom: 60px;
  }

  ${props => props.redish && css`
    border: 1px solid #FB3B64;
  `}

  ${props => props.primary && css`
    border: 1px solid #08A6E4;
    box-shadow: 5px 10px 27px rgba(7, 172, 230, .16);
    width: 405px;
    height: 500px;
    margin-left: 0;

    @media (max-width: 1023px) {
      width: auto;
      height: 280px;
      margin: 55px 0;
    }

    h4 {
      color: #08A6E4;
      padding-bottom: 5px;
    }
  `}

  ${props => props.green && css`
    border: 1px solid #55DFB4;
    
    h4 {
      color: #55DFB4;
      padding: 15px 0;
    }
  `}
`

const Packages = () => {
    const { pricing__name, pricing__ul, ul__green, ul__red } = styles;

    return (
        <>
            <PackageStyled redish>
                <div className={pricing__name}>
                    <h3>Basic</h3>
                    <h4>$0</h4>
                </div>
                <div className={pricing__ul}>
                    <ul className={ul__green}>
                        <li>100 MB HDD</li>
                        <li>1 Subdomain</li>
                        <li>2 E-mails</li>
                    </ul>
                    <ul className={ul__red}>
                        <li>Two years license</li>
                        <li>Full support</li>
                    </ul>
                </div>
                <Button small redish>Begin</Button>
            </PackageStyled>
            <PackageStyled primary>
                <div className={pricing__name}>
                    <h3>Professional</h3>
                    <h4>$25</h4>
                    <h5>Limited offer</h5>
                </div>
                <div className={pricing__ul}>
                    <ul className={ul__green}>
                        <li>500 MB HDD</li>
                        <li>2 Subdomains</li>
                        <li>5 E-mails</li>
                        <li>One year license</li>
                    </ul>
                    <ul className={ul__red}>
                        <li>Full support</li>
                    </ul>
                </div>
                <Button small primary>Begin</Button>
            </PackageStyled>
            <PackageStyled green>
                <div className={pricing__name}>
                    <h3>Premium</h3>
                    <h4>$60</h4>
                    <h5>Limited offer</h5>
                </div>
                <div className={pricing__ul}>
                    <ul className={ul__green}>
                        <li>2 GB HDD</li>
                        <li>5 Subdomains</li>
                        <li>20 E-mails</li>
                        <li>Two years license</li>
                        <li>Full support</li>
                    </ul>
                </div>
                <Button small green>Begin</Button>
            </PackageStyled>
        </>
    )
}

export default Packages;

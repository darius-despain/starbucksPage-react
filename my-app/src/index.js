import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Grid, Item, Divider, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    return (
        <div>
          <Menu borderless className="ui borderless topmenu menu">
            <Container>
              <Image src="https://www.starbucks.com/static/images/global/logo.svg" />
              <Menu.Item>COFFEE</Menu.Item>
              <Menu.Item>TEA</Menu.Item>
              <Menu.Item>MENU</Menu.Item>
              <Menu.Item>COFFEEHOUSE</Menu.Item>
              <Menu.Item>SOCIAL IMPACT</Menu.Item>
              <Menu.Item>STARBUCKS REWARDS</Menu.Item>
              <Menu.Item>STORIES</Menu.Item>
              <Menu.Item>GIFT CARDS</Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}

class MainBanner extends React.Component {

  render() {
    return (
        <div className="main-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <h1>Love your drink</h1>
              <h4>Choose your espresso, smooth or bold. Discover a drink that's made for you. </h4>

              <button className="ui inverted button">FIND YOUR ESPRESSO</button>
            </div>
          </div>
        </div>
    );
  }
}

class BlackBanner extends React.Component {

  render() {
    return (
        <div className="black-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="medium left floated image"
                   src="https://www.starbucks.com/static/images/rewards/msr3_usen_logo.svg"/>
            </div>
            <div className="column">
              <h2>
                Make every sip more rewarding
              </h2>
              <h4>
                Join Starbucks Rewards™ to earn Gold level benefits like free drinks and food, get free refills, pay and
                order with your phone, and more.
              </h4>
            </div>
          </div>
          <div className="ui four column centered grid">
            <button className="ui yellow button">JOIN NOW</button>
            <button className="ui inverted button">SIGN IN</button>
          </div>
        </div>
    );
  }
}

class WhiteBanner extends React.Component {

  render() {
    return (
        <div className="white-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="left floated image"
                   src="https://globalassets.starbucks.com/assets/7579480cc195459883bdc1102bb2d4c1.jpg"/>
            </div>
            <div className="column">
              <h2>
                ENJOY MORE REWARDS
              </h2>
              <h4>
                Earn Stars in and out of Starbucks® stores with the Starbucks Rewards™ Visa® Card and the Starbucks
                Rewards™ Visa® Prepaid Card.
              </h4>
            </div>
          </div>
        </div>
    );
  }
}

class GreenBanner extends React.Component {

  render() {
    return (
        <div className="green-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="left floated image"
                   src="https://globalassets.starbucks.com/assets/b2b894770cf84382aacc37ec9c99b37e.jpg"/>
            </div>
            <div className="column">

              <h2>
                HEARTY WINTER TO YOU
              </h2>
              <h4>
                Warm and satisfying, our new Ham & Swiss Panini is high protein and delicious.
              </h4>
            </div>
          </div>
        </div>
    );
  }
}

class Footer extends React.Component {

  render() {
    return (
        <div className="footer">
          <div className="ui five column grid container">
            <div className="column">
              <h3>ABOUT US</h3>
              <div className="ui list">
                <div className="item">
                  Our Company
                </div>
                <div className="item">
                  Investor Relations
                </div>
                <div className="item">
                  Starbucks Stories
                </div>
                <div className="item">
                  Press Center
                </div>
              </div>
            </div>
            <div className="column">
              <h3>CAREER CENTER</h3>
              <div className="ui list">
                <div className="item">
                  Working at Starbucks
                </div>
                <div className="item">
                  College Plan
                </div>
                <div className="item">
                  Current Partners
                </div>
                <div className="item">
                  Coroporate Careers
                </div>
                <div className="item">
                  Manufacturing and Distribution
                </div>
                <div className="item">
                  Retail Careers
                </div>
                <div className="item">
                  International Careers
                </div>
              </div>
            </div>
            <div className="column">
              <h3>FOR BUSINESS</h3>
              <div className="ui list">
                <div className="item">
                  Office Coffee
                </div>
                <div className="item">
                  Starbucks Coffee International
                </div>
                <div className="item">
                  Foodservice
                </div>
                <div className="item">
                  Starbucks Card Corporate Sales
                </div>
                <div className="item">
                  Landlord Support Center
                </div>
                <div className="item">
                  Suppliers
                </div>
              </div>
            </div>
            <div className="column">
              <h3>ONLINE COMMUNITY</h3>
              <div className="ui list">
                <div className="item">
                  Twitter
                </div>
                <div className="item">
                  Facebook
                </div>
                <div className="item">
                  Instagram
                </div>
                <div className="item">
                  LinkedIn
                </div>
                <div className="item">
                  Pinterest
                </div>
                <div className="item">
                  YouTube
                </div>
                <div className="item">
                  My Starbucks Idea
                </div>
              </div>
            </div>
            <div className="column">
              <h3>QUICK LINKS</h3>
              <div className="ui list">
                <div className="item">
                  My Account
                </div>
                <div className="item">
                  Store Locator
                </div>
                <div className="item">
                  Nutrition Info
                </div>
                <div className="item">
                  Customer Service
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

class StarbucksPage extends React.Component {

  render() {
    return (
        <div>
          <div className="top_green_bar"/>
          <TopMenu/>
          <MainBanner/>
          <BlackBanner/>
          <WhiteBanner/>
          <GreenBanner/>
          <Footer/>
        </div>
  );
  }
}

ReactDOM.render(<StarbucksPage/>, document.getElementById('root'));

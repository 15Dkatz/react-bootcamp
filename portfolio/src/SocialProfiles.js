import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;

    return (
      <span>
        <a href={link}>
          <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
        </a>
      </span>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
              return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
            })
          }
        </div>
      </div>
    )
  }
}

export default SocialProfiles;
